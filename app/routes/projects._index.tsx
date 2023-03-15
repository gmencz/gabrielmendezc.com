import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { linkClassName } from "~/class-names";
import { Markdown } from "~/components/markdown";
import { parseMarkdown } from "~/utils/markdown.server";
import { prisma } from "~/utils/prisma.server";

export async function loader() {
  const projects = await prisma.project.findMany({
    select: {
      id: true,
      logo: true,
      markdown: true,
      name: true,
    },
  });

  return json({
    projects: projects.map((project) => ({
      ...project,
      markdown: parseMarkdown(project.markdown),
    })),
  });
}

export default function Projects() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex-1 px-6 py-10">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl md:text-3xl">Projects</h1>
          <p className="dark:text-neutral-300 text-neutral-700">
            Feast your eyes on a list of my best work, and marvel at the fact
            that I actually finished something for once. I know, I'm shocked
            too. But hey, let's enjoy this moment while it lasts. And if you're
            feeling brave, head on over to my{" "}
            <a
              className={linkClassName}
              href="https://github.com/gmencz?tab=repositories"
            >
              Github page
            </a>{" "}
            where you can find a graveyard of my unfinished projects, a true
            testament to my 'never say die' attitude. Who knows, maybe you'll
            find something there worth resurrecting (or laughing at). Either
            way, it's a journey worth taking!
          </p>
        </div>

        {data.projects.length > 0 ? (
          <ul className="flex gap-16">
            {data.projects.map((project) => (
              <li key={project.id} className="flex flex-col gap-4">
                <img
                  src={project.logo}
                  alt=""
                  className="object-cover rounded-xl max-h-72"
                />

                <div className="flex flex-col gap-1">
                  <p className="font-bold text-lg">{project.name}</p>
                  <Markdown content={project.markdown} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="dark:text-neutral-300 text-neutral-700">
            Nothing here yet.
          </p>
        )}
      </div>
    </div>
  );
}
