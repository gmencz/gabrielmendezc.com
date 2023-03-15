import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { ShouldRevalidateFunction } from "@remix-run/react";
import { Link, useCatch, useLoaderData } from "@remix-run/react";
import type { PropsWithChildren } from "react";
import { linkClassName } from "~/class-names";
import { Markdown } from "~/components/markdown";
import { PostDate, PostViews } from "~/components/post";
import { parseMarkdown } from "~/utils/markdown.server";
import { prisma } from "~/utils/prisma.server";

export const shouldRevalidate: ShouldRevalidateFunction = () => false;

export async function loader({ request, params }: LoaderArgs) {
  const { id } = params;
  if (!id) {
    throw new Response(
      "Hi there, could you let Gabriel know you're seeing this message (id is falsy on blog_.$id.tsx)? Thanks!",
      { status: 500 }
    );
  }

  const post = await prisma.post.findUnique({
    where: { urlFriendlyId: id },
    select: {
      markdown: true,
      title: true,
      publishedAt: true,
      description: true,
      tags: true,
      views: true,
    },
  });

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  await prisma.post.update({
    where: { urlFriendlyId: id },
    data: {
      views: {
        increment: 1,
      },
    },
  });

  return json({
    post: {
      ...post,
      markdown: parseMarkdown(post.markdown),
    },
  });
}

function Layout(props: PropsWithChildren) {
  return (
    <div className="flex-1 px-6 py-10">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-6">
        {props.children}
      </div>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return (
      <Layout>
        <h1 className="font-bold text-2xl md:text-3xl">Page not found</h1>
        <p>
          Oops! It seems like you followed a broken or old link, go back to the{" "}
          <Link className={linkClassName} to="/">
            homepage
          </Link>
          .
        </p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="font-bold text-2xl md:text-3xl">Something went wrong</h1>
      <p>{caught.data}</p>
      <p>
        Go back to the{" "}
        <Link className={linkClassName} to="/">
          homepage
        </Link>
        .
      </p>
    </Layout>
  );
}

export default function BlogPost() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <Layout>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 border-b dark:border-b-neutral-700 border-b-neutral-300 pb-4">
            <h1 className="font-bold text-2xl md:text-3xl">{post.title}</h1>
            <p className="leading-7 dark:text-neutral-300 text-neutral-700">
              {post.description}
            </p>
          </div>

          <div className="flex gap-6">
            <PostDate date={new Date(post.publishedAt!)} />
            <PostViews views={post.views} />
          </div>
        </div>

        <Markdown content={post.markdown} />
      </div>
    </Layout>
  );
}
