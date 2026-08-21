export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">

      <div className="flex flex-col items-center gap-4">

        <div className="w-10 h-10 border-4 border-gray-300 border-t-gray-900 rounded-full animate-spin" />

        <p className="text-gray-600 text-sm">
          Loading news...
        </p>

      </div>

    </div>
  );
}