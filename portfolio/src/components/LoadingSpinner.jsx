import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin"></div>
        <div className="mt-4 text-center">
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner; 