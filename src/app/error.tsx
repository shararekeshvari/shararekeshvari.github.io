"use client";

import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-5">
      <div className="w-full max-w-xl border-y border-border py-14 text-center" role="alert">
        <p className="mb-5 font-mono text-xs text-accent">SOMETHING WENT WRONG</p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">The page didn’t load properly.</h1>
        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-muted">
          You can try loading this part of the portfolio again.
        </p>
        <Button className="mt-8" onClick={reset}>
          <RotateCcw aria-hidden="true" size={16} />
          Try again
        </Button>
      </div>
    </main>
  );
}
