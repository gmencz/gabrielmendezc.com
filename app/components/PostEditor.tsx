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
    <div className="flex flex-1 space-x-8 mt-12">
      <div className="flex-1">
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
          <div className="flex-1 w-full border-none p-4 bg-gray-100  rounded-md">
            <input type="hidden" name="postBody" value={markdown} />
            <Slate editor={editor} value={value} onChange={setValue}>
              <Editable className="break-all prose prose-pink h-full" />
            </Slate>
          </div>
        </Form>
      </div>

      <PostPreview markdown={markdown} />
    </div>
  );
}

export default PostEditor;
