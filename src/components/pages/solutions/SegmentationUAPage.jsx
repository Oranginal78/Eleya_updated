import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../BasePage';
import { BoltIcon, MagnifyingGlassIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const SegmentationUAPage = () => {
    return (
        <BasePage>
            <section className="relative h-[40rem] overflow-hidden -mt-16" style={{
                backgroundColor: 'transparent',
                backgroundImage: 'radial-gradient(rgba(254, 195, 147, 0.5) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}>
                {/* Background Images */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://framerusercontent.com/images/lysrb9oLsW8SXarkxi4Kp9N2FM.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-400/50 via-orange-300/40 to-transparent"></div>
                </div>

                {/* Light Flare Overlay */}
                <div className="absolute inset-0 z-10">
                    <img
                        src="https://framerusercontent.com/images/xdIsSG8TXSulnA0CMVea6YY2Q.png"
                        alt="Light Flare"
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>

                {/* Content */}
                <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-[#194471] leading-tight mb-8">
                            Segmentation & U&A
                        </h1>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans mb-10">
                            Dynamic Consumer Insights with AI-Powered Digital Twins
                        </p>
                        <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed font-sans mb-8">
                            Discover how products integrate into daily lives and segment customers with an unprecedented precision. Combining U&A and segmentation studies with digital twins creates a powerful feedback loop for strategy. Continuously monitor segment-specific usage patterns to refine positioning, identify unmet needs, or uncover whitespace opportunities.
                        </p>
                    </div>
                </div>

                {/* Bottom Fade - jonction dégradée vers la section suivante */}
                <div className="absolute bottom-0 left-0 right-0 h-1 z-30 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, transparent 0%, #FFFDF8 100%)'
                    }}
                ></div>
            </section>

            {/* Image Section */}
            <section className="-mt-20 pb-16 relative z-30" style={{
                backgroundColor: '#FFFDF8',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.05) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                    <div className="w-full mb-12">
                        <img
                            src="/images/Segmentation.png"
                            alt="Segmentation & U&A"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="pb-16 relative z-30" style={{
                backgroundColor: '#FFFDF8',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.05) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-gray-800 mb-4">
                            Key Benefits
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
                            Transform your consumer insights with AI-powered precision
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-20">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                                    <BoltIcon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Real-time Agility
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Track behavioral shifts as they emerge.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                                    <MagnifyingGlassIcon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Contextual Depth
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Uncover unspoken product usage scenarios.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                                    <UserGroupIcon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Dynamic Segmentation
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Identify actionable groups based on behavior.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                                    <AcademicCapIcon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Continuous Learning
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Turn insights into iterative strategy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default SegmentationUAPage; 