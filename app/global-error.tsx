'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-red-500">🚨 오류 발생!</h1>
      <p className="mt-2 text-gray-500">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
      >
        다시 시도하기
      </button>
    </div>
  );
}
