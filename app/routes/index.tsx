import { json, Loader } from "@remix-run/data";
import { Link, useRouteData } from "@remix-run/react";
import { format, parseISO } from "date-fns";
import { PostsQuery } from "../generated/graphql";
import { PostsDocument } from "../gql/posts";
import graphql from "../lib/graphql";

export const loader: Loader = async () => {
  const headers = {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
  };

  const data = await graphql.request<PostsQuery>(PostsDocument, {}, headers);

  return json(data, {
    headers: {
      "cache-control": "max-age=86400, public",
    },
  });
};

export function meta() {
  return {
    title: "Blog",
    description:
      "I write about full-stack development and best practices to create production-ready apps.",
  };
}

export function headers({ loaderHeaders }: { loaderHeaders: Headers }) {
  return {
    "cache-control": loaderHeaders.get("cache-control"),
  };
}

export default function Index() {
  const data = useRouteData<PostsQuery>();

  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <main className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <header>
          <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Blog
          </h1>
          <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
            <p className="text-xl text-gray-500">
              Get weekly articles in your inbox on how to become a better
              full-stack software developer.
            </p>
            <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-pink-700 focus:border-pink-700 lg:max-w-xs"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex">
                <button
                  type="button"
                  disabled
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed bg-pink-700 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-700 sm:w-auto sm:inline-flex"
                >
                  Notify me
                </button>
              </div>
            </form>
          </div>
        </header>
        <section className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {data.posts_connection.edges.length === 0 && (
            <p className="text-xl font-semibold text-gray-900">
              I haven't posted anything yet, come back later!
            </p>
          )}

          {data.posts_connection.edges.map(({ node: post }) => (
            <article key={post.id}>
              <p className="text-sm text-gray-500">
                {post.published_at ? (
                  <time dateTime={post.published_at}>
                    {format(parseISO(post.published_at), "MMM d',' y")}
                  </time>
                ) : (
                  <span>Unknown publish date</span>
                )}
              </p>
              <Link to={`/blog/${post.slug}`} className="mt-2 block">
                <h2 className="text-xl font-semibold text-gray-900">
                  {post.title}
                </h2>
                <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
              </Link>
              <div className="mt-3">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-base font-semibold text-pink-800 hover:text-pink-700"
                >
                  Read full story
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
