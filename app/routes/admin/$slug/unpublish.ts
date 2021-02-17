import { Action, redirect } from "@remix-run/data";
import { ClientError } from "graphql-request";
import {
  UnpublishPostBySlugMutation,
  UnpublishPostBySlugMutationVariables,
} from "../../../generated/graphql";
import { UnpublishPostBySlugDocument } from "../../../gql/posts";
import { destroySession, getSession } from "../../../sessionStorage";
import graphql from "../../../utils/graphql";

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
      UnpublishPostBySlugMutation,
      UnpublishPostBySlugMutationVariables
    >(
      UnpublishPostBySlugDocument,
      { slug: params.slug },
      {
        Authorization: `Bearer ${hasuraJwt}`,
      }
    );
  } catch (error) {
    if (error instanceof ClientError) {
      session.flash("error", error.message);
    }

    session.flash("error", "Something went wrong unpublishing the post");
  }

  return redirect(`/admin/${params.slug}`);
};

export default function Unpublish() {
  return null;
}
