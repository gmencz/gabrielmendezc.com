import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface Project {
  imageSrc: string;
  name: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Yours",
    description:
      "Macro-tracker that adapts to your metabolism. Get it on Amazon App Store.",
    imageSrc: "/images/yours.png",
  },
  {
    name: "OneClip",
    description:
      "Share your clipboard with people nearby. Had to shut it down due to usage costs.",
    imageSrc: "/images/oneclip.png",
  },
];

export function loader(args: LoaderArgs) {
  return json({ projects });
}

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className="text-3xl mt-4 text-slate-50 font-semibold">
        Hello there, I'm Gabriel. Software engineer based in Spain.
      </h1>

      <h2 className="mt-14 text-2xl text-slate-50 font-semibold">Work</h2>
      <p className="text-slate-300 mt-1">
        I currently work at{" "}
        <a className="text-indigo-300" href="https://iconicdevs.es">
          Iconic Devs
        </a>
        . We build high quality software solutions engineered by teams made up
        of the best professionals.
      </p>

      <h2 className="mt-14 text-2xl text-slate-50 font-semibold">Projects</h2>
      <p className="text-slate-300 mt-1">
        These are some of my most recent projects that I work on in my own free
        time.
      </p>
      <ul className="mt-4 grid grid-cols-2 gap-8">
        {projects.map((project) => (
          <li key={project.name} className="flex flex-col">
            <img
              src={project.imageSrc}
              alt={project.name}
              className="w-full h-full max-h-64 object-cover rounded-xl"
            />

            <p className="mt-4 text-slate-50">{project.name}</p>
            <p className="text-slate-400">{project.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
