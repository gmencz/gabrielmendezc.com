import { createCookieSessionStorage } from "@remix-run/node";
import { env } from "./env.server";
import type { Theme } from "./theme-provider";
import { isTheme } from "./theme-provider";

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secure: true,
    secrets: [env.SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * (365 * 10), // 10 years
  },
});

async function getThemeSession(request: Request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie")
  );
  return {
    getTheme: () => {
      const themeValue = session.get("theme");
      return isTheme(themeValue) ? themeValue : null;
    },
    setTheme: (theme: Theme) => session.set("theme", theme),
    commit: () => sessionStorage.commitSession(session),
  };
}

export { getThemeSession };
