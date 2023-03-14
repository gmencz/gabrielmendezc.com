import { json, redirect } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { getThemeSession } from "~/utils/session.server";
import { isTheme } from "~/utils/theme-provider";

export async function action({ request }: ActionArgs) {
  const themeSession = await getThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("theme");

  if (!isTheme(theme)) {
    return json(
      {
        success: false,
        message: `theme value of ${theme} is not a valid theme`,
      },
      { status: 400 }
    );
  }

  themeSession.setTheme(theme);
  return json(
    { success: true },
    { headers: { "Set-Cookie": await themeSession.commit() } }
  );
}

export function loader() {
  return redirect("/", { status: 404 });
}
