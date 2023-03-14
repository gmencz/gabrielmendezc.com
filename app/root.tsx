import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
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
import type { Theme } from "./utils/theme-provider";
import {
  NonFlashOfWrongThemeEls,
  ThemeProvider,
  useTheme,
} from "./utils/theme-provider";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const title = "Gabriel Mendez";
const description = "Developer / Bodybuilder";
const baseURL = "https://gabrielmendezc.com";

export const meta: MetaFunction = () => ({
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
});

export type LoaderData = {
  theme: Theme | null;
  year: number;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const now = new Date();

  const data: LoaderData = {
    theme: themeSession.getTheme(),
    year: now.getUTCFullYear(),
  };

  return json(data);
};

function App() {
  const [theme] = useTheme();
  const data = useLoaderData<LoaderData>();

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
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <App />
    </ThemeProvider>
  );
}
