"use client";
import { useEffect } from "react";

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[200px] flex-col items-center justify-center gap-2">
      <h2 className="text-lg font-semibold">Something went wrong!</h2>
      <button
        className="rounded bg-primary px-4 py-2 text-sm text-primary-foreground"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}