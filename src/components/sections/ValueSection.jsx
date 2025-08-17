import React, { useEffect, useRef, useState } from 'react';
import {
    ChatBubbleLeftRightIcon,
    CheckCircleIcon,
    CogIcon,
    UserGroupIcon,
    ClipboardDocumentListIcon,
    PlusIcon
} from '@heroicons/react/24/outline';

const ProcessStep = ({ icon: Icon, title, description, position, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const stepRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (stepRef.current) {
            observer.observe(stepRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    const positionClasses = {
        'top-left': 'row-start-1 col-start-1',
        'top-right': 'row-start-1 col-start-3',
        'bottom-left': 'row-start-3 col-start-1',
        'bottom-right': 'row-start-3 col-start-3',
        'center': 'row-start-2 col-start-2'
    };

    return (
        <div
            ref={stepRef}
            className={`${positionClasses[position]} ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                } transition-all duration-700 ease-out relative`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl hover:border-[#194471]/30 transition-all duration-300 group relative max-w-xs md:max-w-sm">
                <div className="text-left">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <div className="w-2 h-2 bg-[#194471] rounded-full"></div>
                        <h3 className="text-base md:text-lg font-display font-semibold text-gray-800">
                            {title}
                        </h3>
                        <div className="ml-auto">
                            <svg className="w-3 h-3 md:w-4 md:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </div>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-sans">
                        {description}
                    </p>

                    {/* Multiple choice options */}
                    {position === 'bottom-left' && (
                        <div className="mt-3 md:mt-4 space-y-2.5">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#194471] rounded-full flex-shrink-0"></div>
                                <span className="text-xs md:text-sm text-gray-700 font-medium">Option A</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-[#194471] rounded-full flex-shrink-0"></div>
                                <span className="text-xs md:text-sm text-gray-700 font-medium">Option B</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-gray-300 rounded-full flex-shrink-0"></div>
                                <span className="text-xs md:text-sm text-gray-400 font-medium">Other choice</span>
                            </div>
                        </div>
                    )}

                    {/* Option indicators - REMOVED for Option 1 and 2 */}

                </div>
            </div>
        </div>
    );
};

const CentralHub = ({ delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const hubRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (hubRef.current) {
            observer.observe(hubRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={hubRef}
            className={`row-start-2 col-start-2 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                } transition-all duration-1000 ease-out relative z-20`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="relative">
                {/* Main hub */}
                <div className="relative bg-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-600 overflow-hidden w-48 md:w-64">
                    {/* Dotted pattern background */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="grid grid-cols-6 md:grid-cols-8 gap-1 md:gap-2 h-full">
                            {Array.from({ length: 48 }).map((_, i) => (
                                <div key={i} className="w-0.5 h-0.5 md:w-1 md:h-1 bg-[#194471] rounded-full opacity-60"></div>
                            ))}
                        </div>
                    </div>

                    <div className="relative text-center">
                        <div className="w-8 h-8 md:w-12 md:h-12 bg-[#194471] rounded-lg md:rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                            <CogIcon className="w-4 h-4 md:w-6 md:h-6 text-white" />
                        </div>
                        <h3 className="text-lg md:text-xl font-display font-bold text-white">
                            EleyaTwin
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ConnectionLines = () => {
    return (
        <>
            {/* Desktop connections */}
            <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Entry gate (top-left) to Multiple choice (bottom-left) - vertical connection */}
                    <line
                        x1="8" y1="32"
                        x2="8" y2="65"
                        stroke="#194471"
                        strokeWidth="0.5"
                        opacity="0"
                        vectorEffect="non-scaling-stroke"
                        style={{
                            animation: 'fadeInLine 0.5s ease-out 0.8s forwards'
                        }}
                    />

                    {/* Multiple choice (bottom-left) to center - L-shaped connection */}
                    <path
                        d="M 34 83.33 L 44 83.33 L 46 50"
                        stroke="#194471"
                        strokeWidth="0.5"
                        opacity="0"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        style={{
                            animation: 'fadeInLine 0.5s ease-out 1.3s forwards'
                        }}
                    />

                    {/* Option 1 (top-right) to center - diagonal to middle left edge */}
                    <line
                        x1="69" y1="25"
                        x2="54" y2="50"
                        stroke="#194471"
                        strokeWidth="0.5"
                        opacity="0"
                        vectorEffect="non-scaling-stroke"
                        style={{
                            animation: 'fadeInLine 0.5s ease-out 1.8s forwards'
                        }}
                    />

                    {/* Option 2 (bottom-right) to center - diagonal to middle left edge */}
                    <line
                        x1="69" y1="75"
                        x2="54" y2="50"
                        stroke="#194471"
                        strokeWidth="0.5"
                        opacity="0"
                        vectorEffect="non-scaling-stroke"
                        style={{
                            animation: 'fadeInLine 0.5s ease-out 2.3s forwards'
                        }}
                    />
                </svg>
            </div>

            {/* Mobile connections - adjusted for smaller screens */}
            <div className="block md:hidden absolute inset-0 pointer-events-none z-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Entry gate to Multiple choice */}
                    <line
                        x1="6" y1="30"
                        x2="6" y2="62"
                        stroke="#194471"
                        strokeWidth="0.6"
                        opacity="0"
                        vectorEffect="non-scaling-stroke"
                        style={{
                            animation: 'fadeInLine 0.5s ease-out 0.8s forwards'
                        }}
                    />

                    {/* Multiple choice to center */}
                    <path
                        d="M 35 83.33 L 42 83.33 L 46 50"
                        stroke="#194471"
                        strokeWidth="0.6"
                        opacity="0"
                        fill="none"
                        vectorEffect="non-scaling-stroke"
                        style={{
                            animation: 'fadeInLine 0.5s ease-out 1.3s forwards'
                        }}
                    />

                    {/* Option 1 to center */}
                    <line
                        x1="67" y1="25"
                        x2="54" y2="50"
                        stroke="#194471"
                        strokeWidth="0.6"
                        opacity="0"
                        vectorEffect="non-scaling-stroke"
                        style={{
                            animation: 'fadeInLine 0.5s ease-out 1.8s forwards'
                        }}
                    />

                    {/* Option 2 to center */}
                    <line
                        x1="67" y1="75"
                        x2="54" y2="50"
                        stroke="#194471"
                        strokeWidth="0.6"
                        opacity="0"
                        vectorEffect="non-scaling-stroke"
                        style={{
                            animation: 'fadeInLine 0.5s ease-out 2.3s forwards'
                        }}
                    />
                </svg>
            </div>

            <style jsx>{`
                @keyframes fadeInLine {
                    from {
                        opacity: 0;
                        stroke-dasharray: 1000;
                        stroke-dashoffset: 1000;
                    }
                    to {
                        opacity: 0.8;
                        stroke-dasharray: 1000;
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
        </>
    );
};

const ValueSection = () => {
    return (
        <section className="pt-12 pb-0" style={{
            backgroundColor: '#FFF8ED'
        }}>
            {/* Conteneur avec effet 3D moderne - toute largeur */}
            <div
                className="rounded-3xl py-16 px-8 md:px-12"
                style={{
                    backgroundColor: '#FFF0E1',
                    backgroundImage: 'radial-gradient(rgba(25, 68, 113, 0.08) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                    boxShadow: '0 -20px 40px -8px rgba(0, 0, 0, 0.25), 0 10px 25px -5px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                    transform: 'translateY(-4px)'
                }}
            >
                <div className="container mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="flex justify-center">
                        <div className="bg-white rounded-2xl shadow-xl p-2 md:p-6 max-w-4xl w-full flex justify-center items-center">
                            <img
                                src="/images/shema EleyaTwin.png"
                                alt="EleyaTwin schema"
                                className="w-full max-w-3xl h-auto object-contain rounded-xl"
                                style={{ minWidth: 0 }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueSection; 