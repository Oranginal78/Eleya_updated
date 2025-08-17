import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BasePage from './BasePage';
import { UsersIcon, ChatBubbleLeftRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { SparklesIcon } from '@heroicons/react/24/solid';

const FranceGPTPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <BasePage>
            {/* Hero Section - Same background as landing page */}
            <section className="relative min-h-screen overflow-hidden -mt-16" style={{
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
                <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-0">
                    <div className={`text-center max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#194471]/10 text-[#194471] px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <SparklesIcon className="w-4 h-4" />
                            AI Population Simulation
                        </div>

                        {/* Main Title */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-gray-800 leading-tight mb-8">
                            <span className="text-[#194471]">The French population</span>
                            <br />
                            <span className="text-gray-700">in your pocket</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans mb-8">
                            What if you could chat with an entire population at once?
                            <span className="block mt-2 font-semibold text-[#194471]">Discover FranceGPT!</span>
                        </p>

                        {/* Description */}
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed font-sans mb-12">
                            FranceGPT is the first AI-powered simulation of the French population, crafted to mirror
                            the diversity, habits, and decision-making of real people.
                        </p>
                    </div>
                </div>

                {/* CTA Button - Separate layer */}
                <div className="absolute bottom-20 left-0 right-0 z-40 flex justify-center">
                    <Link
                        to="/francegpt/experience"
                        className="inline-flex items-center gap-3 bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-lg font-display font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Try FranceGPT
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>
                </div>

                {/* Bottom Fade - jonction dégradée vers la section suivante */}
                <div className="absolute bottom-0 left-0 right-0 h-80 z-30 pointer-events-none"
                    style={{
                        background: 'linear-gradient(to bottom, transparent 0%, #FEF1E1 100%)'
                    }}
                ></div>
            </section>

            {/* Photos Section - Clean background */}
            <section className="py-16" style={{
                backgroundColor: '#FEF1E1'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-gray-800 mb-4">
                            Photos from FranceGPT
                        </h2>
                        <p className="text-gray-500 font-sans max-w-2xl mx-auto">
                            Explore the digital representation of French society through our AI-powered simulation platform.
                        </p>
                    </div>

                    {/* Single Image */}
                    <div className="max-w-4xl mx-auto">
                        <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                            <img
                                src="/images/landscape.jpg"
                                alt="FranceGPT - Digital French Population Simulation"
                                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <h3 className="text-2xl font-display font-semibold mb-2">FranceGPT Experience</h3>
                                <p className="text-white/90 max-w-md">
                                    The most comprehensive AI simulation of French society, ready to chat with you.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section - Same clean background */}
            <section className="py-20" style={{
                backgroundColor: '#FEF1E1'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-gray-800 mb-6">
                            Your Digital Twin Awaits
                        </h2>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto font-sans leading-relaxed">
                            Built with AI and large datasets, FranceGPT is the digital twin of the French population.
                            Answer a quick personality test, and see how your own digital twin compares with the entire
                            French population on all the questions that come to your mind.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        <div className="text-center group">
                            <div className="w-20 h-20 bg-[#194471]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#194471]/20 transition-colors duration-300">
                                <UsersIcon className="w-10 h-10 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Population Simulation
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Experience the most comprehensive AI simulation of French society, reflecting real diversity and behaviors.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-20 h-20 bg-[#194471]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#194471]/20 transition-colors duration-300">
                                <ChatBubbleLeftRightIcon className="w-10 h-10 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Interactive Conversations
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Chat with your digital twin and discover how your opinions align with different segments of French society.
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-20 h-20 bg-[#194471]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#194471]/20 transition-colors duration-300">
                                <SparklesIcon className="w-10 h-10 text-[#194471]" />
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Personality Analysis
                            </h3>
                            <p className="text-gray-500 font-sans leading-relaxed">
                                Take our personality test and discover your unique position within the French population landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Same clean background */}
            <section className="py-20" style={{
                backgroundColor: '#FEF1E1'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-gray-800 mb-6">
                            Ready to Meet Your Digital Twin?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 font-sans">
                            Start your journey into the fascinating world of French population simulation.
                        </p>
                        <Link
                            to="/francegpt/experience"
                            className="relative z-10 inline-flex items-center gap-3 bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-lg font-display font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Try FranceGPT Now
                            <ArrowRightIcon className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default FranceGPTPage; 