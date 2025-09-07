import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Ecommerce } from "../../context/Context";

function ProductDetail() {
  const { id } = useParams();
  const { cartDetail, setCartDetail, loading, setLoading } = useContext(Ecommerce);

  const fetchSingleProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setCartDetail(data);
    } catch (error) {
      console.error('Error fetching product:', error.message);
      setCartDetail(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(id) fetchSingleProduct();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="mt-32 min-h-screen bg-gray-50">
        <div className='flex justify-center items-center min-h-96'>
          <div className='text-center'>
            <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-purple-500 mx-auto mb-4'></div>
            <p className='text-xl font-semibold text-gray-600'>Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state - no product found
  if (!cartDetail) {
    return (
      <div className="mt-32 min-h-screen bg-gray-50">
        <div className='flex justify-center items-center min-h-96'>
          <div className='text-center'>
            <div className='text-6xl text-gray-300 mb-4'>❌</div>
            <p className='text-xl font-semibold text-gray-500 mb-2'>
              Product not found
            </p>
            <p className='text-gray-400'>
              The product you're looking for doesn't exist or has been removed.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-32 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left side - Product Images */}
            <div className="p-6">
              {/* Main Image */}
              <div className="mb-4">
                <img 
                  src={cartDetail.thumbnail || cartDetail.images?.[0]} 
                  alt={cartDetail.title}
                  className="w-full h-96 object-cover rounded-lg shadow-md"
                />
              </div>
              
              {/* Thumbnail Images */}
              {cartDetail.images && cartDetail.images.length > 1 && (
                <div className="flex gap-5 overflow-x-auto  ">
                  {cartDetail.images.slice(0, 4).map((image, index) => (
                    <div className=" shadow-lg">
                      <img
                      key={index}
                      src={image}
                      alt={`${cartDetail.title} ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-md cursor-pointer hover:opacity-75 transition-opacity"
                    />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right side - Product Details */}
            <div className="p-6">
              {/* Category */}
              {cartDetail.category && (
                <span className="inline-block bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full mb-3 capitalize">
                  {cartDetail.category}
                </span>
              )}

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {cartDetail.title}
              </h1>

              {/* Rating */}
              {cartDetail.rating && (
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(cartDetail.rating)
                            ? 'text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    ({cartDetail.rating}) • {cartDetail.stock} in stock
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                {cartDetail.discountPercentage > 0 ? (
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-green-600">
                      ${(cartDetail.price * (1 - cartDetail.discountPercentage / 100)).toFixed(2)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      ${cartDetail.price}
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded">
                      -{cartDetail.discountPercentage}%
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-green-600">
                    ${cartDetail.price}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {cartDetail.description}
                </p>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                {cartDetail.brand && (
                  <div>
                    <span className="font-semibold text-gray-700">Brand:</span>
                    <span className="ml-2 text-gray-600">{cartDetail.brand}</span>
                  </div>
                )}
                {cartDetail.warrantyInformation && (
                  <div>
                    <span className="font-semibold text-gray-700">Warranty:</span>
                    <span className="ml-2 text-gray-600">{cartDetail.warrantyInformation}</span>
                  </div>
                )}
                {cartDetail.shippingInformation && (
                  <div className="col-span-2">
                    <span className="font-semibold text-gray-700">Shipping:</span>
                    <span className="ml-2 text-gray-600">{cartDetail.shippingInformation}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 font-semibold">
                  Add to Cart
                </button>
                <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-semibold">
                  Buy Now
                </button>
              </div>

              {/* Tags */}
              {cartDetail.tags && cartDetail.tags.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cartDetail.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded capitalize"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;