import { Link } from "@remix-run/react";
import { linkClassName } from "~/class-names";

export default function Index() {
  return (
    <div className="flex-1 flex items-center px-6 py-10">
      <div className="flex flex-col md:flex-row gap-16 max-w-4xl w-full mx-auto">
        <figure className="flex order-2 md:order-1 flex-col gap-4 flex-shrink-0">
          <img
            className="rounded-xl object-cover h-full md:h-[550px] lg:h-[650px]"
            src="/robot.png"
            alt="KG, Your AI Assistant"
          />

          <figcaption>
            <p className="leading-7">
              I'm{" "}
              <Link className={linkClassName} to="/kg">
                KG
              </Link>
              , your AI assistant.
            </p>
          </figcaption>
        </figure>

        <div className="md:py-12 order-1 md:order-2">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-4xl md:text-5xl">Hola!</h1>
            <p className="leading-7">
              I'm <strong className="font-bold">Gabriel</strong>, bodybuilding
              enthusiast and tech wizard from sunny Spain. When I'm not building
              my physique or{" "}
              <a className={linkClassName} href="https://github.com/gmencz">
                crafting code
              </a>
              , you can find me relaxing with my favorite series or movies.
            </p>

            <div className="dark:bg-neutral-800 bg-neutral-200 p-4 rounded-xl ring-1 dark:ring-neutral-700 ring-neutral-300">
              <p className="leading-7">
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
