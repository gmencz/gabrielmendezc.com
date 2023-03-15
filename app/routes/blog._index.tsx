import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useSearchParams } from "@remix-run/react";
import clsx from "clsx";
import { linkClassName } from "~/class-names";
import { PostDate, PostViews } from "~/components/post";
import { prisma } from "~/utils/prisma.server";

export function meta() {
  return {
    title: "Blog - Gabriel Mendez",
  };
}

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const currentTagId = url.searchParams.get("tag");

  const [tags, posts] = await Promise.all([
    prisma.postTag.findMany({
      select: {
        name: true,
        urlFriendlyId: true,
      },
    }),

    prisma.post.findMany({
      where: currentTagId
        ? {
            AND: [
              { tags: { some: { urlFriendlyId: currentTagId } } },
              { published: true },
              {
                publishedAt: {
                  not: null,
                },
              },
            ],
          }
        : {
            published: true,
            publishedAt: {
              not: null,
            },
          },

      orderBy: { publishedAt: "desc" },

      select: {
        id: true,
        publishedAt: true,
        title: true,
        urlFriendlyId: true,
        views: true,
        description: true,
      },
    }),
  ]);

  return json({ tags: [{ name: "All", urlFriendlyId: null }, ...tags], posts });
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const currentTagId = searchParams.get("tag");

  return (
    <div className="flex-1 px-6 py-10">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl md:text-3xl">Blog</h1>
          <ul className="flex gap-2">
            {data.tags.map((tag) => (
              <li key={tag.name}>
                <Link
                  className={clsx(
                    "dark:hover:bg-neutral-800 hover:bg-neutral-200 font-medium text-sm rounded-xl py-2 px-3 border border-neutral-400 dark:border-neutral-700",
                    currentTagId === tag.urlFriendlyId
                      ? "dark:bg-neutral-800 bg-neutral-200"
                      : "dark:bg-neutral-900 bg-neutral-100"
                  )}
                  to={tag.urlFriendlyId ? `.?tag=${tag.urlFriendlyId}` : "."}
                >
                  {tag.name}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-7 dark:text-neutral-400 text-neutral-700">
            {data.posts.length} {data.posts.length === 1 ? "post" : "posts"}
          </p>
        </div>

        <ol className="flex flex-col gap-8">
          {data.posts.map((post) => (
            <li key={post.id}>
              <article className="flex flex-col gap-2">
                <h1>
                  <Link
                    className={clsx(linkClassName, "text-xl")}
                    to={`./${post.urlFriendlyId}`}
                  >
                    {post.title}
                  </Link>
                </h1>

                <p className="leading-7 dark:text-neutral-300 text-neutral-700">
                  {post.description}
                </p>

                <div className="flex gap-6">
                  <PostDate date={new Date(post.publishedAt!)} />
                  <PostViews views={post.views} />
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
