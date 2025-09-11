import React from 'react'
import notFound from '/src/assets/not.webp'
import { useLocation } from 'react-router-dom'

function Error() {
    const location = useLocation()
    
    return (
        <div className=" mt-10 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-8">
            <div className="max-w-lg w-full text-center">
                {/* Image Container */}
                <div className="mb-8">
                    <img 
                        src={notFound} 
                        alt="Page not found illustration" 
                        className="w-full h-auto max-w-md mx-auto object-contain"
                    />
                </div>
                
                {/* Content Container */}
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                        404
                    </h1>
                    
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
                        Oops! Page Not Found
                    </h2>
                    
                    <p className="text-gray-600 text-base md:text-lg mb-6">
                        The page <span className="font-mono bg-gray-200 px-2 py-1 rounded text-sm">
                            {location.pathname}
                        </span> doesn't exist or has been moved.
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                        <button 
                            onClick={() => window.history.back()}
                            className=" hover:cursor-pointer w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            Go Back
                        </button>
                        
                        <button 
                            onClick={() => window.location.href = '/'}
                            className="hover:cursor-pointer w-full sm:w-auto px-6 py-3 bg-white hover:bg-indigo-200 text-indigo-600 font-medium rounded-lg border-2 border-indigo-600 transition-colors duration-200 shadow-md hover:shadow-lg"
                        >
                            Go Home
                        </button>
                    </div>
                </div>
                
                {/* Optional decorative element */}
                <div className="mt-12 opacity-50">
                    <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error