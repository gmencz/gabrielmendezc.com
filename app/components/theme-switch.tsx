import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Theme, useTheme } from "~/utils/theme-provider";

export function ThemeSwitch() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center dark:hover:text-neutral-300 hover:text-neutral-700 hover:ring-1 dark:ring-neutral-700 ring-neutral-300 p-2 rounded-xl"
    >
      {theme === Theme.LIGHT ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
}
