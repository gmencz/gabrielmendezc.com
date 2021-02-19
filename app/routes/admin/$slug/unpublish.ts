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
    session.flash("error", error.message);
  }

  return redirect(`/admin/${params.slug}`);
};

export default function Unpublish() {
  return null;
}
