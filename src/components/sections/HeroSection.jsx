import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
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
                {/* Main Content */}
                <div className="text-center max-w-4xl mx-auto">
                    {/* Main Heading */}
                    <div className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                        }`}>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-gray-800 leading-tight">
                            Tailored AI panels. Quality data.{' '}
                            <span className="text-[#194471] relative">
                                Zero wait.
                            </span>
                        </h1>
                    </div>

                    {/* Subtitle */}
                    <div className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                        }`}>
                        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-sans">
                            Conduct quantitative and qualitative surveys in real-time with our AI panelists, delivering actionable insights to stimulate growth.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Button - Separate layer */}
            <div className={`absolute bottom-70 left-0 right-0 z-40 flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                <Link
                    to="/demo"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#194471] hover:bg-[#194471]/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-lg font-display"
                >
                    Request a demo
                </Link>
            </div>

            {/* Bottom Fade - jonction dégradée vers la section suivante */}
            <div className="absolute bottom-0 left-0 right-0 h-80 z-30 pointer-events-none"
                style={{
                    background: 'linear-gradient(to bottom, transparent 0%, #FFF8ED 100%)'
                }}
            ></div>
        </section>
    );
};

export default HeroSection; 