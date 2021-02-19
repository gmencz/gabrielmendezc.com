import { Action, redirect } from "@remix-run/data";
import {
  DeletePostBySlugMutation,
  DeletePostBySlugMutationVariables,
} from "../../../generated/graphql";
import { DeletePostBySlugDocument } from "../../../gql/posts";
import { destroySession, getSession } from "../../../sessionStorage";
import graphql, { ClientError } from "../../../utils/graphql";

export const action: Action = async ({ request, params }) => {
  const session = await getSession(request.headers.get("Cookie"));

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
      DeletePostBySlugMutation,
      DeletePostBySlugMutationVariables
    >(
      DeletePostBySlugDocument,
      { slug: params.slug },
      {
        Authorization: `Bearer ${hasuraJwt}`,
      }
    );
  } catch (error) {
    session.flash("error", error.message);
  }

  // Redirect to the homepage because the post
  // we were viewing is no longer available
  // since we just deleted it
  return redirect("/");
};

export default function Delete() {
  return null;
}
