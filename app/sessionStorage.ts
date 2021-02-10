import { createCookieSessionStorage } from "@remix-run/data";

let { getSession, commitSession, destroySession } = createCookieSessionStorage({
  // This is either a Cookie (or a set of CookieOptions) that
  // describe the session cookie to use.
  cookie: {
    name: "__session",
    secrets: [process.env.SESSION_SECRET_1 as string],
    sameSite: "lax",
  },
});

export { getSession, commitSession, destroySession };
