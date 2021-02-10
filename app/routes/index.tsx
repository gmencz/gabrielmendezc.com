import { json, Loader } from "@remix-run/data";
import { useRouteData } from "@remix-run/react";
import { gql } from "graphql-request";
import graphql from "../lib/graphql";

export let loader: Loader = async () => {
  let headers = {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET as string,
  };

  let data = await graphql.request(
    gql`
      query Posts {
        posts_connection(order_by: { published_at: desc }) {
          edges {
            node {
              id
              title
              body
            }
          }
        }
      }
    `,
    {},
    headers
  );

  return json(data, {
    headers: {
      "cache-control": "max-age=86400",
    },
  });
};

export function meta() {
  return {
    title: "Blog",
    description:
      "I write about full-stack development and best practices to create production-ready apps.",
  };
}

export function headers({ loaderHeaders }: { loaderHeaders: Headers }) {
  return {
    "cache-control": loaderHeaders.get("cache-control"),
  };
}

export default function Index() {
  let data = useRouteData();

  console.log({ data });

  return (
    <div className="py-28">
      <h1 className="font-bold text-3xl mb-2">Blog</h1>
      <p>
        I write about full-stack development and best practices to create
        production-ready apps.
      </p>
    </div>
  );
}
