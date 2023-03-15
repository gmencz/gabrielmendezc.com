import { ChatBubbleOvalLeftIcon } from "@heroicons/react/20/solid";
import { linkClassName } from "~/class-names";

export default function KG() {
  return (
    <div className="flex-1 px-6 py-10 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-16">
          <img
            className="order-2 md:order-1 rounded-xl object-cover h-full md:h-[550px] lg:h-[650px]"
            src="/robot.png"
            alt="KG, Your AI Assistant"
          />

          <div className="md:py-12 order-1 md:order-2">
            <div className="flex flex-col gap-8">
              <h1 className="font-bold text-2xl md:text-3xl">
                Introducing KG...
              </h1>

              <p className="dark:text-neutral-300 text-neutral-700 leading-7">
                The <strong>AI assistant</strong> that's all Gabriel, all the
                time. With an encyclopedic knowledge of Gabriel facts and
                figures, KG is the ultimate source for all things Gabriel. From
                Gabriel's favorite music to his current gym program, KG has the
                answers you seek. And if you're worried about KG's reliability,
                fear not. KG is powered by a{" "}
                <a className={linkClassName} href="https://openai.com">
                  sophisticated machine learning algorithm
                </a>{" "}
                that is constantly evolving to keep up with Gabriel's
                ever-changing likes and dislikes. So whether you're a Gabriel
                superfan or just curious about the man behind the website, KG is
                here to help.
              </p>

              <button className="dark:hover:bg-neutral-800 dark:bg-neutral-900 hover:bg-neutral-200 bg-neutral-100 font-semibold rounded-xl p-3 border border-neutral-400 dark:border-neutral-700 flex items-center justify-center gap-2">
                <ChatBubbleOvalLeftIcon className="h-6 w-6" />
                <span>Try it now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
