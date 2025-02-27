'use client';

import { useEffect, useState } from 'react';

interface PageErrorBoundaryProps {
  children: React.ReactNode;
}

export default function PageErrorBoundary({ children }: PageErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError(event.error);
      setHasError(true);
      event.preventDefault();
    };

    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] p-4 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <p className="mb-6 text-gray-700">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <button
          onClick={() => setHasError(false)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  return <>{children}</>;
} 