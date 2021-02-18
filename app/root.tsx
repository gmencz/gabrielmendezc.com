import { Links, LinksFunction, Meta, Scripts } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import tailwind from "css:./styles/tailwind.css";
import useWindowScrollRestoration from "./utils/use-window-scroll-restoration";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwind }];
};

export default function App() {
  const pendingLocation = useWindowScrollRestoration();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="author" content="Gabriel Méndez" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          opacity: !!pendingLocation ? "0.25" : "1",
          transition: "opacity 500ms ease-in-out",
          transitionDelay: "300ms",
        }}
      >
        <Outlet />

        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
