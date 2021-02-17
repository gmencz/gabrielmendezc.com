import { json, Loader, MetaFunction, redirect } from "@remix-run/data";
import { usePendingFormSubmit, useRouteData } from "@remix-run/react";
import { useState } from "react";
import {
  PostBySlugQuery,
  PostBySlugQueryVariables,
} from "../../../generated/graphql";
import { PostBySlugDocument } from "../../../gql/posts";
import { commitSession, getSession } from "../../../sessionStorage";
import graphql from "../../../util/graphql";
import PostEditor from "../../../components/PostEditor";
import PostActions from "../../../components/PostActions";

export const loader: Loader = async ({ params, request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("userId")) {
    return redirect("/admin");
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

  return json(routeData, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export type Post = PostBySlugQuery["posts_connection"]["edges"][number];

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
  const pendingSubmit = usePendingFormSubmit();

  // We need to control the title separately because we
  // show it to the user in more places than just the form
  // and it has to update as the user updates it.
  const [postTitle, setPostTitle] = useState(post.node.title);

  return (
    <div className="py-10 px-8 min-h-screen flex flex-col">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0 space-y-2">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {postTitle}
          </h2>
          {error ? (
            <span className="block text-sm text-red-500">{error}</span>
          ) : (
            <span className="block text-sm text-gray-500">
              {!!pendingSubmit ? "Saving..." : "Changes are saved as you edit"}
            </span>
          )}
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4 space-x-3">
          <PostActions post={post} />
        </div>
      </div>

      <PostEditor
        controlledPostTitle={postTitle}
        setControlledPostTitle={setPostTitle}
        post={post}
      />
    </div>
  );
}

export default EditBlogPost;
