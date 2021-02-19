import { Action, json, Loader, redirect } from "@remix-run/data";
import { Form, Link, useRouteData } from "@remix-run/react";
import {
  CreatePostMutation,
  CreatePostMutationVariables,
} from "../../generated/graphql";
import { CreatePostDocument } from "../../gql/posts";
import {
  commitSession,
  destroySession,
  getSession,
} from "../../sessionStorage";
import graphql from "../../utils/graphql";
import kebabCase from "lodash.kebabcase";

export const action: Action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  const bodyParams = new URLSearchParams(await request.text());
  const slug = bodyParams.get("slug");
  const title = bodyParams.get("title");
  const excerpt = bodyParams.get("excerpt");

  if (!session.has("hasuraJwt")) {
    const destroyedSession = await destroySession(session);
    return redirect("/admin", {
      headers: {
        "Set-Cookie": destroyedSession,
      },
    });
  }

  const hasuraJwt = session.get("hasuraJwt");
  let createPostMutation: CreatePostMutation;

  try {
    createPostMutation = await graphql.request<
      CreatePostMutation,
      CreatePostMutationVariables
    >(
      CreatePostDocument,
      {
        data: {
          slug: kebabCase(slug!),
          title,
          excerpt,
          body: "...",
        },
      },
      {
        Authorization: `Bearer ${hasuraJwt}`,
      }
    );
  } catch (error) {
    session.flash("error", error.message);

    return redirect("/admin/new", {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  return redirect(`/admin/${createPostMutation.insert_posts_one?.slug}`);
};

export const loader: Loader = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));

  if (!session.has("userId")) {
    // Redirect to the home page if the user isn't signed
    // in as an admin.
    return redirect("/");
  }

  return json(
    { error: session.get("error") },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    }
  );
};

export default function NewDraft() {
  const { error } = useRouteData();

  console.log({ error });

  return (
    <div className="py-8 md:py-10 px-4 md:px-8 max-w-2xl w-full mx-auto">
      <Form
        className="space-y-8 divide-y divide-gray-200"
        method="post"
        action="/admin/new"
      >
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                New draft
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                This will create a new draft that you can edit and publish once
                ready.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="slug"
                  className="block text-sm font-medium text-gray-700"
                >
                  Slug
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                    /
                  </span>
                  <input
                    required
                    type="text"
                    name="slug"
                    id="slug"
                    className="flex-1 focus:ring-pink-800 focus:border-pink-800 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <div className="mt-1">
                  <input
                    required
                    type="text"
                    name="title"
                    id="title"
                    className="shadow-sm focus:ring-pink-800 focus:border-pink-800 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="excerpt"
                  className="block text-sm font-medium text-gray-700"
                >
                  Excerpt
                </label>
                <div className="mt-1">
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    rows={3}
                    className="shadow-sm focus:ring-pink-800 focus:border-pink-800 block w-full sm:text-sm border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Write a short appealing description about the draft.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-between">
            <div className="mr-4">
              <p className="text-red-600">{error}</p>
            </div>
            <div className="flex items-start">
              <Link
                role="button"
                to="/"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-800"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-800 hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
