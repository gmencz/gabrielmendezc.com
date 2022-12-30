import type { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="w-full max-w-2xl mx-auto py-12 font-poppins px-6">
      {children}
    </div>
  );
}
