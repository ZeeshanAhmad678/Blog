import React from "react";

export default function HomeSkeleton() {
  return (
    <div className="animate-pulse min-h-screen bg-gray-100">
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        <div className="flex-1 space-y-6">
          <div className="h-10 w-1/2 bg-gray-300 rounded" /> 
          <div className="h-6 w-3/4 bg-gray-300 rounded" /> 
          <div className="h-10 w-32 bg-gray-300 rounded-full" />
          <div className="h-4 w-1/2 bg-gray-300 rounded" />
        </div>

        <div className="flex-1 mt-10 md:mt-0 flex justify-center">
          <div className="w-48 h-48 bg-gray-300 rounded-lg md:w-72 md:h-72" />
        </div>
      </div>
    </div>
  );
}
