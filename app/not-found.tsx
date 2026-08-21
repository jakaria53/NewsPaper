import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">

      <div className="text-center">

        <p className="text-7xl font-bold text-gray-900">
          404
        </p>

        <h1 className="text-3xl font-bold text-gray-900 mt-4">
          Page Not Found
        </h1>

        <p className="text-gray-500 mt-3">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="
            inline-block
            mt-6
            px-6
            py-3
            bg-gray-900
            text-white
            rounded-lg
            hover:bg-gray-700
            transition
          "
        >
          ← Back to Home
        </Link>

      </div>

    </main>
  );
}