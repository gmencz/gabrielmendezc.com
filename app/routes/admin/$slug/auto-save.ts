import { Action, redirect } from "@remix-run/data";
import {
  EditPostBySlugMutation,
  EditPostBySlugMutationVariables,
} from "../../../generated/graphql";
import { EditPostBySlugDocument } from "../../../gql/posts";
import graphql, { ClientError } from "../../../utils/graphql";
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
  const postSlug = bodyParams.get("postSlug");
  const postExcerpt = bodyParams.get("postExcerpt");

  if (!session.has("hasuraJwt")) {
    const destroyedSession = await destroySession(session);
    return redirect("/admin", {
      headers: {
        "Set-Cookie": destroyedSession,
      },
    });
  }

  const hasuraJwt = session.get("hasuraJwt");

  let postMutation: EditPostBySlugMutation | null = null;
  try {
    postMutation = await graphql.request<
      EditPostBySlugMutation,
      EditPostBySlugMutationVariables
    >(
      EditPostBySlugDocument,
      {
        slug: params.slug,
        data: {
          body: postBody,
          title: postTitle,
          slug: postSlug,
          excerpt: postExcerpt,
        },
      },
      {
        Authorization: `Bearer ${hasuraJwt}`,
      }
    );
  } catch (error) {
    session.flash("error", error.message);
  }

  const slug = postMutation?.update_posts?.returning[0].slug ?? params.slug;
  return redirect(`/admin/${slug}`, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
};

export default function AutoSave() {
  return null;
}
