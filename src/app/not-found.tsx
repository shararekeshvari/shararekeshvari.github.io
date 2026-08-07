import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-5">
      <div className="w-full max-w-xl border-y border-border py-14 text-center">
        <p className="mb-5 font-mono text-xs text-accent">ERROR / 404</p>
        <h1 className="text-5xl font-semibold sm:text-7xl">That page isn’t here.</h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-muted">
          The address may be incorrect, or the page may have moved.
        </p>
        <Link href="/" className={`${buttonVariants({ variant: "primary" })} mt-8`}>
          <ArrowLeft aria-hidden="true" size={16} />
          Return to portfolio
        </Link>
      </div>
    </main>
  );
}
