import { json, Loader, redirect } from "@remix-run/data";
import { MetaFunction, useRouteData } from "@remix-run/react";
import { parseISO, format } from "date-fns";
import { ReactNode } from "react";
import Markdown from "react-markdown";
import markdownGfm from "remark-gfm";
import CodeBlock from "../../../components/CodeBlock";
import {
  PostBySlugQuery,
  PostBySlugQueryVariables,
} from "../../../generated/graphql";
import { PostBySlugDocument } from "../../../gql/posts";
import graphql from "../../../lib/graphql";
import { getSession } from "../../../sessionStorage";
import markdownBreaks from "remark-breaks";

export const loader: Loader = async ({ params, request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const data = await graphql.request<PostBySlugQuery, PostBySlugQueryVariables>(
    PostBySlugDocument,
    { slug: params.slug },
    { "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string }
  );

  if (data.posts_connection.edges.length === 0) {
    return redirect("/404");
  }

  const [post] = data.posts_connection.edges;

  return json(
    { post, isAdmin: session.has("userId") },
    {
      headers: {
        "cache-control": "max-age=86400, public",
      },
    }
  );
};

type Post = PostBySlugQuery["posts_connection"]["edges"][number];
interface LoaderData {
  post: Post;
  isAdmin: boolean;
}

export const meta: MetaFunction = (route) => {
  const { post } = route.data as LoaderData;

  return {
    title: post.node.title,
    description: post.node.excerpt,
  };
};

export function headers({ loaderHeaders }: { loaderHeaders: Headers }) {
  return {
    "cache-control": loaderHeaders.get("cache-control"),
  };
}

function BlogPost() {
  const data = useRouteData<LoaderData>();

  return (
    <ContentWrapper>
      {data.isAdmin && (
        <div className="fixed bottom-10 left-10 flex space-x-4">
          <a
            href={`/admin/${data.post.node.slug}`}
            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-pink-700 hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            <svg
              className="-ml-1 mr-3 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Edit
          </a>
        </div>
      )}
      <h1>
        <span className="block text-base text-center text-pink-800 font-semibold tracking-wide uppercase">
          {data.post.node.published_at
            ? format(parseISO(data.post.node.published_at), "MMM d',' y")
            : "Unknown publish date"}
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {data.post.node.title}
        </span>
      </h1>
      <div className="mt-6 prose prose-pink prose-lg text-gray-500 mx-auto">
        <Markdown
          plugins={[markdownGfm, markdownBreaks]}
          renderers={{
            code: CodeBlock,
          }}
        >
          {data.post.node.body}
        </Markdown>
      </div>
    </ContentWrapper>
  );
}

interface ContentWrapperProps {
  children: ReactNode;
}

function ContentWrapper({ children }: ContentWrapperProps) {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">{children}</div>
      </div>
    </div>
  );
}

export default BlogPost;