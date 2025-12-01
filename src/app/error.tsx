'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-light text-gray-900 mb-4">Oops!</h1>
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-8">
          We encountered an unexpected error. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
