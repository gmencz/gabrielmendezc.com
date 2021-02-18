import { json, Loader } from "@remix-run/data";
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
import graphql from "../../../utils/graphql";
import markdownBreaks from "remark-breaks";

function getMaxAge(publishedAt: string) {
  // If the post was recently published (less than a day ago)
  // let's give the author a chance to make edits, but after
  // the first day, we'll aggresively cache this for a month
  const oneDayMs = 86400000;
  const millisecondsSincePublished = Date.now() - Date.parse(publishedAt);
  return millisecondsSincePublished < oneDayMs
    ? "1800" // 30 minutes
    : "2592000000"; // one month;
}

export const loader: Loader = async ({ params }) => {
  const data = await graphql.request<PostBySlugQuery, PostBySlugQueryVariables>(
    PostBySlugDocument,
    { slug: params.slug },
    { "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string }
  );

  if (data.posts_connection.edges.length === 0) {
    return new Response(null, {
      status: 404,
    });
  }

  const [post] = data.posts_connection.edges;

  if (!post.node.published_at) {
    // The post is not published so we
    // will not cache it
    return json({ post });
  }

  const maxAge = getMaxAge(post.node.published_at);

  return json(
    { post },
    {
      headers: {
        "Cache-Control": `public, max-age=600, s-maxage=${maxAge}, stale-while-revalidate=31556952`,
      },
    }
  );
};

type Post = PostBySlugQuery["posts_connection"]["edges"][number];
interface LoaderData {
  post: Post;
}

export const meta: MetaFunction = (route) => {
  const { post } = route.data as LoaderData;

  return {
    title: post.node.title,
    description: post.node.excerpt,
  };
};

function BlogPost() {
  const data = useRouteData<LoaderData>();

  return (
    <ContentWrapper>
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
