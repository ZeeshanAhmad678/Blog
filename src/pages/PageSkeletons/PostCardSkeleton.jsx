import React from "react";

function PostCardSkeleton() {
  return (
    <div className="flex items-center">
        <div className="w-full rounded-xl p-4 mt-6 md:mt-2 animate-pulse">
          <div className="w-full mb-4">
           
            <div className="mb-2 w-full h-48 bg-gray-300 rounded-lg" />
        
            
            <div className="h-6 w-3/4 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="w-full rounded-xl p-4 mt-6 md:mt-2 animate-pulse">
          <div className="w-full mb-4">
           
            <div className="mb-2 w-full h-48 bg-gray-300 rounded-lg" />
        
            
            <div className="h-6 w-3/4 bg-gray-300 rounded" />
          </div>
        </div>
        <div className="w-full rounded-xl p-4 mt-6 md:mt-2 animate-pulse">
          <div className="w-full mb-4">
           
            <div className="mb-2 w-full h-48 bg-gray-300 rounded-lg" />
        
            
            <div className="h-6 w-3/4 bg-gray-300 rounded" />
          </div>
        </div>
    </div>
  );
}

export default PostCardSkeleton;
