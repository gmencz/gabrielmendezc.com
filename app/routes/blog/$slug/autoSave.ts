import { Action, redirect } from "@remix-run/data";
import {
  EditPostBySlugMutation,
  EditPostBySlugMutationVariables,
} from "../../../generated/graphql";
import { EditPostBySlugDocument } from "../../../gql/posts";
import graphql, { ClientError } from "../../../lib/graphql";
import {
  commitSession,
  destroySession,
  getSession,
} from "../../../sessionStorage";

export const action: Action = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));
  console.log({ params });

  if (!session.has("hasuraJwt")) {
    const destroyedSession = await destroySession(session);
    return redirect("/admin", {
      headers: {
        "Set-Cookie": destroyedSession,
      },
    });
  }

  const { postBody } = await request.json();

  const hasuraJwt = session.get("hasuraJwt");

  try {
    await graphql.request<
      EditPostBySlugMutation,
      EditPostBySlugMutationVariables
    >(
      EditPostBySlugDocument,
      { slug: params.slug, data: { body: postBody } },
      {
        Authorization: `Bearer ${hasuraJwt}`,
      }
    );
  } catch (error) {
    if (error instanceof ClientError) {
      session.flash("error", error.message);
    }

    session.flash("error", "Something went wrong auto-saving the post");
  }

  return redirect(`/blog/${params.slug}/edit`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

function AutoSave() {
  return null;
}

export default AutoSave;
