export function meta() {
  return {
    title: "Blog",
    description:
      "I write about full-stack development and best practices to create production-ready apps.",
  };
}

export default function Index() {
  return (
    <>
      <h1 className="font-bold text-3xl mb-2">Blog</h1>
      <p>
        I write about full-stack development and best practices to create
        production-ready apps.
      </p>
    </>
  );
}
