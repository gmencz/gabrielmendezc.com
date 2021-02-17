import { Form, useSubmit } from "@remix-run/react";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createEditor, Node } from "slate";
import { Editable, Slate, withReact } from "slate-react";
import { PostBySlugQuery } from "../generated/graphql";
import PostPreview from "./PostPreview";
import { useDebouncedCallback } from "use-debounce";

interface PostEditorProps {
  post: PostBySlugQuery["posts_connection"]["edges"][number];
  controlledPostTitle: string;
  setControlledPostTitle: Dispatch<SetStateAction<string>>;
}

function PostEditor({
  post,
  controlledPostTitle,
  setControlledPostTitle,
}: PostEditorProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const submit = useSubmit();
  const editor = useMemo(() => withReact(createEditor()), []);
  const autoSave = useDebouncedCallback(() => {
    submit(formRef.current);
  }, 2000);

  const [value, setValue] = useState<Node[]>(() => {
    return post.node.body.split("\n").map((paragraph) => ({
      type: "paragraph",
      children: [{ text: paragraph }],
    }));
  });

  const markdown = useMemo(() => {
    return value.map((v) => Node.string(v)).join("\n");
  }, [value]);

  useEffect(() => {
    if (post.node.body !== markdown) {
      autoSave.callback();
    } else {
      autoSave.cancel();
    }
  }, [autoSave, markdown, post.node.body]);

  return (
    <div className="md:flex md:flex-1 md:space-x-8 mt-12">
      <div className="md:flex-1 mb-12">
        <Form
          ref={formRef}
          action={`/admin/${post.node.slug}/auto-save`}
          method="post"
          replace
          className="h-full w-full space-y-4 flex flex-col"
          onChange={() => autoSave.callback()}
        >
          <div>
            <label
              htmlFor="postTitle"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="postTitle"
                id="postTitle"
                required
                maxLength={70}
                value={controlledPostTitle}
                onChange={(e) => setControlledPostTitle(e.target.value)}
                className="shadow-sm focus:ring-pink-800 focus:border-pink-800 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="postSlug"
              className="block text-sm font-medium text-gray-700"
            >
              Slug
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                /
              </span>
              <input
                type="text"
                name="postSlug"
                id="postSlug"
                defaultValue={post.node.slug}
                className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md focus:ring-pink-800 focus:border-pink-800 sm:text-sm border-gray-300"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="postExcerpt"
              className="block text-sm font-medium text-gray-700"
            >
              Excerpt
            </label>
            <div className="mt-1">
              <textarea
                name="postExcerpt"
                id="postExcerpt"
                required
                rows={5}
                maxLength={300}
                defaultValue={post.node.excerpt}
                className="shadow-sm focus:ring-pink-800 focus:border-pink-800 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex-1 w-full border-none p-4 bg-gray-100 rounded-md">
            <input type="hidden" name="postBody" value={markdown} />
            <Slate editor={editor} value={value} onChange={setValue}>
              <Editable className="break-all prose prose-pink max-w-full h-full" />
            </Slate>
          </div>
        </Form>
      </div>

      <PostPreview markdown={markdown} />
    </div>
  );
}

export default PostEditor;
