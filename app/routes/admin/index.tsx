import { Action, json, Loader } from "@remix-run/data";
import { redirect } from "@remix-run/data";
import { Form, usePendingFormSubmit, useRouteData } from "@remix-run/react";
import { commitSession, getSession } from "../../sessionStorage";
import { verify } from "argon2";
import jwt from "jsonwebtoken";
import client, { gql } from "../../lib/graphql";

export const loader: Loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (session.has("userId")) {
    // Redirect to the home page if they are already signed in.
    return redirect("/");
  }

  const data = { error: session.get("error") };

  return json(data, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export const action: Action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  const bodyParams = new URLSearchParams(await request.text());

  const username = bodyParams.get("username");
  const password = bodyParams.get("password");

  const ADMIN_QUERY = gql`
    query AdminByUsername($username: String!) {
      admins_connection(where: { username: { _eq: $username } }) {
        edges {
          node {
            id
            username
            password
          }
        }
      }
    }
  `;

  const variables = {
    username,
  };

  const headers = {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
  };

  const data = await client.request(ADMIN_QUERY, variables, headers);
  const [adminEdge] = data.admins_connection.edges;

  if (!adminEdge) {
    session.flash("error", "Invalid username/password");

    return redirect("/admin", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  const isValidPassword = await verify(
    adminEdge.node.password,
    password as string
  );

  if (!isValidPassword) {
    session.flash("error", "Invalid username/password");

    return redirect("/admin", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  const hasuraJwtContents = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["admin"],
      "x-hasura-default-role": "admin",
      "x-hasura-user-id": adminEdge.node.id,
    },
  };

  const hasuraJwt = await new Promise<string>((res, rej) => {
    jwt.sign(
      hasuraJwtContents,
      process.env.SESSION_SECRET_1 as string,
      { algorithm: "HS256" },
      (err, token) => {
        if (err) return rej(err);
        return res(token as string);
      }
    );
  });

  session.set("userId", adminEdge.node.id);
  session.set("hasuraJwt", hasuraJwt);

  return redirect("/", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function Admin() {
  const { error } = useRouteData();
  const pendingForm = usePendingFormSubmit();

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {error && <p className="text-red-600">{error}</p>}
        <Form className="mt-8 space-y-6" method="post">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-800 focus:border-pink-800 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-800 focus:border-pink-800 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              disabled={!!pendingForm}
              type="submit"
              className="group disabled:cursor-not-allowed disabled:opacity-50 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-800 hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-800"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-pink-600 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {pendingForm ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
