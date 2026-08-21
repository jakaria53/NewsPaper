"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">

      <div className="text-center max-w-md">

        <div className="text-6xl">
          ⚠️
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mt-5">
          Something went wrong
        </h1>

        <p className="text-gray-500 mt-3">
          We couldn't load this page right now.
          Please try again.
        </p>

        <div className="flex justify-center gap-3 mt-6">

          <button
            onClick={() => reset()}
            className="
              px-5
              py-3
              bg-gray-900
              text-white
              rounded-lg
              hover:bg-gray-700
              transition
            "
          >
            Try Again
          </button>

          <Link
            href="/"
            className="
              px-5
              py-3
              border
              border-gray-300
              text-gray-700
              rounded-lg
              hover:bg-gray-100
              transition
            "
          >
            Home
          </Link>

        </div>

      </div>

    </main>
  );
}