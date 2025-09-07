import React, { useContext } from 'react'
import ProductsList from './ProductsList'
import { Ecommerce } from '../../context/Context'

function Home() {
  const { product, loading } = useContext(Ecommerce)
    
  return (
    <div className='mt-32 min-h-screen bg-gray-50'>
      {/* Loading State */}
      {loading ? (
        <div className='flex justify-center items-center min-h-96'>
          <div className='text-center'>
            <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4'></div>
            <p className='text-xl font-semibold text-gray-600'>Loading products...</p>
          </div>
        </div>
      ) : (
        /* Products Content */
        <div>
          {/* Page Header */}
          <div className='text-center py-8'>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
              Our Products
            </h1>
            <p className='text-gray-600 text-lg'>
              Discover amazing products at great prices
            </p>
          </div>

          {/* Products Display */}
          {product && product.length > 0 ? (
            <ProductsList product={product} />
          ) : (
            <div className='flex justify-center items-center min-h-64'>
              <div className='text-center'>
                <div className='text-6xl text-gray-300 mb-4'>🛍️</div>
                <p className='text-xl font-semibold text-gray-500 mb-2'>
                  No products available
                </p>
                <p className='text-gray-400'>
                  Check back later for new products
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Home