import { json, Loader, MetaFunction, redirect } from "@remix-run/data";
import { useRouteData, useSubmit } from "@remix-run/react";
import { useEffect, useMemo, useState } from "react";
import {
  PostBySlugQuery,
  PostBySlugQueryVariables,
} from "../../../generated/graphql";
import Markdown from "react-markdown";
import markdownGfm from "remark-gfm";
import { PostBySlugDocument } from "../../../gql/posts";
import graphql from "../../../lib/graphql";
import { getSession } from "../../../sessionStorage";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import markdownBreaks from "remark-breaks";
import CodeBlock from "../../../components/CodeBlock";

export const loader: Loader = async ({ params, request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("userId")) {
    // Redirect to the actual blog post if the user
    // tries to go to this page.
    return redirect(`/blog/${params.slug}`);
  }

  const data = await graphql.request<PostBySlugQuery, PostBySlugQueryVariables>(
    PostBySlugDocument,
    { slug: params.slug },
    { "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string }
  );

  if (data.posts_connection.edges.length === 0) {
    return redirect("/404");
  }

  const [post] = data.posts_connection.edges;
  const routeData = { error: session.get("error"), post };
  return json(routeData);
};

type Post = PostBySlugQuery["posts_connection"]["edges"][number];

interface RouteData {
  error: string | undefined;
  post: Post;
}

export const meta: MetaFunction = (route) => {
  const { post } = route.data as RouteData;

  return {
    title: `Editing ${post.node.title}`,
    description: post.node.excerpt,
  };
};

function EditBlogPost() {
  const { post, error } = useRouteData<RouteData>();
  const editor = useMemo(() => withReact(createEditor()), []);
  const [autoSaving, setAutoSaving] = useState(false);

  const submit = useSubmit();

  const [value, setValue] = useState<Node[]>(() => {
    return post.node.body.split("\n").map((paragraph) => ({
      type: "paragraph",
      children: [{ text: paragraph }],
    }));
  });

  const markdown = useMemo(() => {
    return value.map((v) => Node.string(v)).join("\n");
  }, [value]);

  useEffect(() => {
    if (markdown !== post.node.body) {
      const autoSaveTimeout = setTimeout(async () => {
        // const formData = new FormData();
        // formData.append("postBody", markdown);

        submit(null, {
          action: `http://localhost:3000/blog/${post.node.slug}/autoSave`,
          method: "post",
        });

        // setAutoSaving(true);

        // await fetch(`/blog/${post.node.slug}/autoSave`, {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     postBody: markdown,
        //   }),
        // });

        // setAutoSaving(false);
      }, 2000);

      return () => {
        clearTimeout(autoSaveTimeout);
      };
    }
  }, [markdown]);

  return (
    <div className="py-10 px-8 min-h-screen flex flex-col">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0 space-y-2">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {post.node.title}
          </h2>
          <span className="block text-sm text-gray-500">
            {autoSaving ? "Saving..." : "Changes are saved as you edit"}
          </span>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
          {post.node.published ? (
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                  clipRule="evenodd"
                />
                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
              </svg>
              Unpublish
            </button>
          ) : (
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Publish
            </button>
          )}
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg
              className="-ml-1 mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            Delete
          </button>
        </div>
      </div>

      <div className="flex flex-1 space-x-8 mt-12">
        <div className="flex-1">
          <div className="h-full w-full border-none p-4 bg-gray-100">
            <Slate
              editor={editor}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            >
              <Editable className="break-all prose prose-pink" />
            </Slate>
          </div>
        </div>

        <div className="flex-1 py-4 break-all prose prose-pink">
          <Markdown
            plugins={[markdownGfm, markdownBreaks]}
            renderers={{
              code: CodeBlock,
            }}
          >
            {markdown}
          </Markdown>
        </div>
      </div>
    </div>
  );
}

export default EditBlogPost;
