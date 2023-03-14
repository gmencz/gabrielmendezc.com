import { renderers, type RenderableTreeNodes } from "@markdoc/markdoc";
import * as React from "react";

type Props = { content: RenderableTreeNodes };

export function Markdown({ content }: Props) {
  return <div className="leading-7">{renderers.react(content, React)}</div>;
}
