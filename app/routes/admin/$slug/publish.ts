import { Action, redirect } from "@remix-run/data";
import { ClientError } from "graphql-request";
import {
  PublishPostBySlugMutation,
  PublishPostBySlugMutationVariables,
} from "../../../generated/graphql";
import { PublishPostBySlugDocument } from "../../../gql/posts";
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
      PublishPostBySlugMutation,
      PublishPostBySlugMutationVariables
    >(
      PublishPostBySlugDocument,
      { slug: params.slug, now: new Date().toISOString() },
      {
        Authorization: `Bearer ${hasuraJwt}`,
      }
    );
  } catch (error) {
    session.flash("error", error.message);
  }

  return redirect(`/admin/${params.slug}`);
};

export default function Publish() {
  return null;
}
