import SyntaxHighlighter from "react-syntax-highlighter";
import OneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

interface CodeBlockProps {
  value?: string;
  language: string | null;
}

function CodeBlock({ value = "", language }: CodeBlockProps) {
  return (
    <SyntaxHighlighter language={language ?? undefined} style={OneDark}>
      {value}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
