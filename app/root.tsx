import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import clsx from "clsx";
import stylesheet from "~/tailwind.css";
import { Footer } from "./components/footer";
import { MobileNav, Nav } from "./components/nav";
import { getThemeSession } from "./utils/session.server";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from "./utils/theme-provider";

export function links() {
  return [{ rel: "stylesheet", href: stylesheet }];
}

const title = "Gabriel Mendez";
const description = "Developer / Bodybuilder";
const baseURL = "https://gabrielmendezc.com";

export function meta() {
  return {
    charset: "utf-8",
    title,
    viewport: "width=device-width,initial-scale=1",
    description,
    author: title,
    language: "en",
    robots: "index, follow",
    "twitter:card": "summary_large_image",
    "twitter:image": baseURL + "/robot.png",
    "twitter:description": description,
    "X-UA-Compatible": "IE=edge,chrome=1",
    "og:title": title,
    "og:url": baseURL,
    "og:image": baseURL + "/robot.png",
    "og:description": description,
  };
}

export async function loader({ request }: LoaderArgs) {
  const themeSession = await getThemeSession(request);
  const now = new Date();

  return json({
    theme: themeSession.getTheme(),
    year: now.getUTCFullYear(),
  });
}

function App() {
  const [theme] = useTheme();
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en" className={clsx("h-full", theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body className="h-full bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 flex flex-col">
        <Nav />
        <Outlet />
        <Footer />
        <MobileNav />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData<typeof loader>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
