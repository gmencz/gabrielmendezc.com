import { EnvelopeIcon } from "@heroicons/react/24/outline";

export function Footer() {
  return (
    <footer className="px-10 py-4 border-t dark:border-t-neutral-700 border-t-neutral-200 text-sm">
      <div className="max-w-5xl w-full mx-auto flex items-center justify-between">
        <div className="flex gap-2">
          <span>©</span>
          <span>2023</span>
          <span>Gabriel Mendez</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/gmencz"
            className="hover:underline hover:underline-offset-2 hover:decoration-1 dark:hover:text-neutral-300 hover:text-neutral-700 p-2 rounded-xl"
          >
            Github
          </a>

          <a
            href="mailto:yo@gabrielmendezc.com"
            className="dark:hover:text-neutral-300 hover:text-neutral-700 hover:ring-1 dark:ring-neutral-700 ring-neutral-300 p-2 rounded-xl"
          >
            <EnvelopeIcon className="h-5 w-5" />
            <span className="sr-only">Send me an email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
