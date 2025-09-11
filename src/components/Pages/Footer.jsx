import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const year = new Date().getFullYear()
    const navigate = useNavigate()
    
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    
                    {/* Get to Know Us Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">
                            Get to Know Us
                        </h3>
                        <div className="space-y-2">
                            <p 
                                onClick={() => navigate('/about')} 
                                className="text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors duration-200"
                            >
                                About E-commerce
                            </p>
                            <p 
                                onClick={() => navigate('/careers')} 
                                className="text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors duration-200"
                            >
                                Careers
                            </p>
                            <p 
                                onClick={() => navigate('/blog')} 
                                className="text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors duration-200"
                            >
                                Blog
                            </p>
                        </div>
                    </div>

                    {/* Contact Us Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">
                            Contact Us
                        </h3>
                        <div className="space-y-2">
                            <a 
                                href="https://www.instagram.com/simple_smile_heart/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-gray-300 hover:text-white hover:underline transition-colors duration-200"
                            >
                                Instagram
                            </a>
                            <a 
                                href="#" 
                                className="block text-gray-300 hover:text-white hover:underline transition-colors duration-200"
                            >
                                LinkedIn
                            </a>
                            <a 
                                href="#" 
                                className="block text-gray-300 hover:text-white hover:underline transition-colors duration-200"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>

                    {/* Customer Service Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white border-b border-gray-600 pb-2">
                            Customer Service
                        </h3>
                        <div className="space-y-2">
                            <p 
                                onClick={() => navigate('/help')} 
                                className="text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors duration-200"
                            >
                                Help Center
                            </p>
                            <p 
                                onClick={() => navigate('/returns')} 
                                className="text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors duration-200"
                            >
                                Returns & Exchanges
                            </p>
                            <p 
                                onClick={() => navigate('/shipping')} 
                                className="text-gray-300 hover:text-white hover:underline cursor-pointer transition-colors duration-200"
                            >
                                Shipping Info
                            </p>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="space-y-4">
                        <h3 className="text-sm sm:text-lg font-semibold text-white border-b border-gray-600 pb-2">
                            Stay Updated
                        </h3>
                        <div className="space-y-2 sm:space-y-4">
                            <p className="text-xs sm:text-sm text-gray-300">
                                Subscribe to get special offers and updates
                            </p>
                            <div className="flex flex-col gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email"
                                    className="w-full px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button className="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200 font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-600 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-center md:text-left">
                            <p className="text-gray-400 text-sm">
                                © {year} E-commerce. All rights reserved.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
                            <p 
                                onClick={() => navigate('/terms')} 
                                className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"
                            >
                                Terms of Service
                            </p>
                            <p 
                                onClick={() => navigate('/cookies')} 
                                className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"
                            >
                                Cookie Policy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer