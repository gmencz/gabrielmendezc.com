import { Action, redirect } from "@remix-run/data";
import {
  EditPostBySlugMutation,
  EditPostBySlugMutationVariables,
} from "../../../generated/graphql";
import { EditPostBySlugDocument } from "../../../gql/posts";
import graphql, { ClientError } from "../../../util/graphql";
import {
  commitSession,
  destroySession,
  getSession,
} from "../../../sessionStorage";

export const action: Action = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));

  const bodyParams = new URLSearchParams(await request.text());
  const postBody = bodyParams.get("postBody");
  const postTitle = bodyParams.get("postTitle");

  if (!session.has("hasuraJwt")) {
    const destroyedSession = await destroySession(session);
    return redirect("/admin", {
      headers: {
        "Set-Cookie": destroyedSession,
      },
    });
  }

  const hasuraJwt = session.get("hasuraJwt");

  try {
    await graphql.request<
      EditPostBySlugMutation,
      EditPostBySlugMutationVariables
    >(
      EditPostBySlugDocument,
      { slug: params.slug, data: { body: postBody, title: postTitle } },
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

  return redirect(`/admin/${params.slug}`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function AutoSave() {
  return null;
}
