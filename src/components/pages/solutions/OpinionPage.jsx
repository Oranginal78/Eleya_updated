import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../BasePage';
import { ChatBubbleLeftRightIcon, ClockIcon, ShieldExclamationIcon, EyeIcon } from '@heroicons/react/24/outline';

const OpinionPage = () => {
    return (
        <BasePage>
            <section className="hero-intro relative min-h-[40rem] md:h-[40rem] overflow-visible -mt-16" style={{
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
                <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-8 md:pb-16">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="font-display font-semibold text-[#194471] leading-tight mb-8" style={{
                            fontSize: 'clamp(1.75rem, 7vw, 4.5rem)',
                            lineHeight: 1.15
                        }}>
                            Opinion & Sentiment Analysis
                        </h1>
                        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans mb-10" style={{
                            fontSize: 'clamp(1.125rem, 4.5vw, 1.25rem)',
                            lineHeight: 1.4
                        }}>
                            Real-time Public Opinion Tracking with AI-Powered Sentiment Analysis
                        </p>
                        <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed font-sans mb-8" style={{
                            fontSize: 'clamp(0.9375rem, 4vw, 1.125rem)',
                            lineHeight: 1.5,
                            wordBreak: 'normal',
                            overflowWrap: 'anywhere'
                        }}>
                            Monitor public sentiment, track opinion shifts, and understand what drives public perception in real-time. Our digital twin technology provides continuous insights into public opinion across any topic, demographic, or geographic region. Transform reactive monitoring into proactive strategy.
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
                            src="/images/opinion1.png"
                            alt="Opinion & Sentiment Analysis"
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
                            Transform your opinion monitoring with AI-powered precision
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-20">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                                    <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Real-time Sentiment Tracking
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Monitor public opinion shifts as they happen across any topic or demographic.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                                    <ClockIcon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Continuous Monitoring
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Track opinion trends over time without manual intervention.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                                    <ShieldExclamationIcon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Crisis Detection
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Identify potential reputation risks before they escalate.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm border border-gray-200">
                                    <EyeIcon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Granular Insights
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Understand sentiment drivers across different audience segments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default OpinionPage; 