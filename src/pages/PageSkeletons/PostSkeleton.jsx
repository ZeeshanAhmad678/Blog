import React from "react";

export default function PostSkeleton() {
  return (
    <div className="py-8 animate-pulse">
      <div className="container mx-auto">
        
        <div className="w-full flex justify-center mb-8">
          <div className="w-full md:w-2/3 lg:w-1/2 h-64 bg-gray-300 rounded-xl" />
        </div>

 
        <div className="w-full flex flex-col items-center mb-6">
          <div className="h-8 w-2/3 bg-gray-300 rounded mb-4" />

        
          <div className="space-y-3 max-w-3xl w-full">
            <div className="h-4 w-full bg-gray-300 rounded" />
            <div className="h-4 w-5/6 bg-gray-300 rounded" />
            <div className="h-4 w-4/6 bg-gray-300 rounded" />
            <div className="h-4 w-3/6 bg-gray-300 rounded" />
            <div className="h-4 w-2/3 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}
