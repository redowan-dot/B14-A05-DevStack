import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-4">
      <div>
        <div className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-pink-500 animate-spin"></div>
      </div>
      <p className="mt-3 text-sm text-gray-500">
        Loading technologies dataset...
      </p>
    </div>
  );
};

export default LoadingSpinner;
