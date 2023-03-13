import { Link } from "@remix-run/react";
import { linkClassName } from "~/class-names";

export default function Index() {
  return (
    <div className="flex-1 flex items-center p-10">
      <div className="flex gap-16 max-w-5xl w-full mx-auto">
        <figure className="flex flex-col gap-4 flex-shrink-0">
          <img
            className="rounded-xl object-cover h-full min-h-[450px] max-h-[650px]"
            src="/robot.png"
            alt="KG, Your AI Assistant"
          />

          <figcaption className="flex">
            <p>
              I'm{" "}
              <Link className={linkClassName} to="/kg">
                KG
              </Link>
              , your AI assistant.
            </p>
          </figcaption>
        </figure>

        <div className="py-12">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-4xl md:text-5xl">Hola!</h1>
            <p>
              I'm <strong className="font-bold">Gabriel</strong>, a bodybuilding
              enthusiast and tech wizard from sunny Spain. When I'm not building
              my physique or{" "}
              <a className={linkClassName} href="https://github.com/gmencz">
                crafting code
              </a>
              , you can find me relaxing with my favorite series or movies.
            </p>

            <div className="dark:bg-neutral-800 bg-neutral-200 p-4 rounded-xl ring-1 dark:ring-neutral-700 ring-neutral-300">
              <p>
                Currently working at{" "}
                <a className={linkClassName} href="https://iconicdevs.es">
                  Iconic Devs
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
