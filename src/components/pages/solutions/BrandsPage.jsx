import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../BasePage';
import { ArrowTrendingUpIcon, CursorArrowRaysIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const BrandsPage = () => {
    return (
        <BasePage>
            <section className="py-20" style={{
                background: 'linear-gradient(135deg, rgba(254, 200, 162, 0.1) 0%, rgba(254, 215, 170, 0.1) 100%)',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.08) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="text-[#194471] text-sm font-medium uppercase tracking-wide mb-4 font-sans">
                            Solution for Brands
                        </p>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gray-800 leading-tight mb-6">
                            For Brands
                        </h1>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-sans">
                            Power niche go-to-market strategies at scale with AI-driven insights that help brands understand and reach their target audiences more effectively.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20" style={{
                backgroundColor: '#FFF4E6',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.1) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <CursorArrowRaysIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Precision Targeting
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Identify and understand your most valuable customer segments with unprecedented granularity.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <ArrowTrendingUpIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Growth Optimization
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Optimize your marketing strategies and campaigns for maximum ROI and customer acquisition.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                <ChartBarIcon className="w-8 h-8 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Data-Driven Decisions
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Make confident business decisions backed by AI-powered analytics and predictive insights.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <Link
                            to="/demo"
                            className="inline-block bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-lg font-display font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            Request Demo
                        </Link>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default BrandsPage; 