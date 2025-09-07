import React from 'react'

function ProductsList({ product = [] }) {
  
  console.log('Products:', product);

  // Handle empty or undefined product array
  if (!product || product.length === 0) {
    return (
      <div className='flex justify-center items-center min-h-64'>
        <p className='text-gray-500 text-lg'>No products available</p>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-6'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
        {product.map((item) => (
          <div 
            key={item.id} 
            className='bg-white border-2 border-purple-400 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group'
          >
            {/* Product Image */}
            <div className='h-48 bg-gray-100 flex items-center justify-center overflow-hidden'>
              {item.thumbnail ? (
                <img 
                  src={item.thumbnail} 
                  alt={item.title || item.name || 'Product'} 
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                />
              ) : (
                <div className='text-gray-400 text-sm'>No Image</div>
              )}
            </div>

            {/* Product Details */}
            <div className='p-4'>
              {/* Product Title */}
              <h3 className='font-semibold text-gray-800 text-sm mb-2 line-clamp-2 min-h-10'>
                {item.title || item.name || 'Untitled Product'}
              </h3>

              {/* Product Category */}
              {item.category && (
                <p className='text-xs text-gray-500 mb-2 capitalize'>
                  {item.category}
                </p>
              )}

              {/* Product Price */}
              <div className='flex items-center justify-between mb-3'>
                {item.price && (
                  <span className='text-lg font-bold text-green-600'>
                    ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                  </span>
                )}
                
                {/* Product Rating */}
                {item.rating && (
                  <div className='flex items-center gap-1'>
                    <span className='text-yellow-400'>★</span>
                    <span className='text-sm text-gray-600'>
                      {typeof item.rating === 'object' ? item.rating.rate : item.rating}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className='flex gap-2'>
                <button className='flex-1 bg-purple-500 text-white py-2 px-3 rounded-md hover:bg-purple-600 transition-colors duration-200 text-sm font-medium'>
                  Add to Cart
                </button>
                <button className='bg-gray-200 text-gray-700 py-2 px-3 rounded-md hover:bg-gray-300 transition-colors duration-200 text-sm'>
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsList