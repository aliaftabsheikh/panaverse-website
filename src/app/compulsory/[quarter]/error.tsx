'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="h-screen flex justify-center items-center">
      <h2 className="text-2xl">404 Not Found</h2>
    </div>
  );
}
