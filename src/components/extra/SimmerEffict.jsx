import React from "react";

function ShimmerEffect() {
  const mapped = Array.from({ length: 30 });

  return (
    <div className="container mx-auto px-4 py-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-30">
        {mapped.map((_, index) => (
          <div
            key={index}
            className="bg-white  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group animate-pulse"
          >
            {/* Product Image Placeholder */}
            <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-gray-300 rounded"></div>
            </div>

            <div className="p-4">
              {/* Product Title Placeholder */}
              <div className="mb-2 min-h-10 space-y-2">
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded w-full"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded w-3/4"></div>
              </div>

              {/* Product Category Placeholder */}
              <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded w-1/2 mb-2"></div>

              {/* Product Price and Rating Placeholder */}
              <div className="flex items-center justify-between mb-3">
                <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded w-16"></div>
                
                <div className="flex items-center gap-1">
                  <div className="h-4 w-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded"></div>
                  <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded w-8"></div>
                </div>
              </div>

              {/* Action Buttons Placeholder */}
              <div className="flex gap-2">
                <div className="flex-1 h-9 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded-md"></div>
                <div className="h-9 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite] rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}

export default ShimmerEffect;