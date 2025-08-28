import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BasePage from './BasePage';
import { CloudArrowUpIcon, UserGroupIcon, ChartBarIcon } from '@heroicons/react/24/outline';

// BarChart Component
const BarChart = ({ data, title, question, isAnimated = false, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationProgress, setAnimationProgress] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const chartRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setTimeout(() => {
                        setIsVisible(true);
                        if (isAnimated) {
                            setHasAnimated(true);
                            const duration = 1500;
                            const startTime = Date.now();

                            const animate = () => {
                                const elapsed = Date.now() - startTime;
                                const progress = Math.min(elapsed / duration, 1);
                                setAnimationProgress(progress);

                                if (progress < 1) {
                                    requestAnimationFrame(animate);
                                }
                            };

                            animate();
                        }
                    }, delay);
                }
            },
            { threshold: 0.1 }
        );

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => observer.disconnect();
    }, [isAnimated, delay, hasAnimated]);

    const getBarWidth = (value, maxValue) => {
        const baseWidth = (value / maxValue) * 70;
        return baseWidth;
    };

    const maxValue = Math.max(...data.map(item => item.value));

    return (
        <div
            ref={chartRef}
            className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
            <div className="mb-6">
                <h3 className="text-lg font-display font-semibold text-gray-800 mb-2">
                    {question}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>COMPLETED</span>
                    <span className="ml-auto">15 AVR., 09:39</span>
                </div>
            </div>

            <div className="mb-6">
                <div className="relative">
                    <button className="w-full text-left px-3 py-2 border border-gray-200 rounded-lg text-gray-500 text-sm">
                        Select filter parameter
                    </button>
                </div>
            </div>

            <div className="space-y-4">
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="w-20 text-right text-sm text-gray-600 font-medium">
                            {item.label}
                        </div>
                        <div className="flex-1 bg-gray-100 rounded-md h-8 relative overflow-hidden">
                            <div
                                className="bg-[#194471] h-full rounded-md transition-all duration-1000 ease-out"
                                style={{
                                    width: isAnimated
                                        ? `${getBarWidth(item.value, maxValue) * animationProgress}%`
                                        : `${getBarWidth(item.value, maxValue)}%`
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-between text-xs text-gray-400 mt-4 px-24">
                <span>0</span>
                <span>7</span>
                <span>14</span>
                <span>21</span>
                <span>28</span>
            </div>
        </div>
    );
};

// StackedBarChart Component
const StackedBarChart = ({ data, title, question, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [filterType, setFilterType] = useState('Age');
    const chartRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (chartRef.current) {
            observer.observe(chartRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    const colors = {
        'Likely cannot cooperate': '#4FC3D7',
        'Likely can cooperate': '#6BCF7C',
        'Not sure': '#A8E6CF',
        'Definitely cannot cooperate': '#5BC0EB',
        'Other': '#FFB366'
    };

    const ageGroupColors = {
        '25-34': '#194471',
        '35-49': '#A8E6CF',
        '50-64': '#4FC3D7',
        '65-74': '#6BCF7C',
        '75+': '#FFB366'
    };
    const ageGroups = ['25-34', '35-49', '50-64', '65-74', '75+'];

    return (
        <div
            ref={chartRef}
            className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
            <div className="mb-6">
                <h3 className="text-lg font-display font-semibold text-gray-800 mb-2">
                    {question}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>COMPLETED</span>
                    <span className="ml-auto">11 JUIN, 14:02</span>
                </div>
            </div>

            <div className="mb-6">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">Age</span>
                    <button className="ml-auto text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="space-y-3">
                {data.map((item, index) => {
                    const total = Object.values(item.values).reduce((sum, val) => sum + val, 0);
                    const maxWidth = 75;

                    return (
                        <div key={index} className="flex items-center gap-4">
                            <div className="w-24 text-right text-sm text-gray-600 font-medium">
                                {item.category}
                            </div>
                            <div className="flex-1 relative">
                                <div className="bg-gray-100 rounded-md h-6 overflow-hidden">
                                    <div className="flex h-full" style={{ width: `${maxWidth}%` }}>
                                        {Object.entries(item.values).map(([key, value], segmentIndex) => (
                                            <div
                                                key={segmentIndex}
                                                className="transition-all duration-1000 ease-out"
                                                style={{
                                                    width: `${(value / total) * 100}%`,
                                                    backgroundColor: filterType === 'Age' ? ageGroupColors[key] || '#E5E7EB' : colors[key] || '#E5E7EB',
                                                    transitionDelay: `${segmentIndex * 100}ms`
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex justify-between text-xs text-gray-400 mt-4 px-28">
                <span>0</span>
                <span>8</span>
                <span>16</span>
                <span>24</span>
                <span>32</span>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 text-xs">
                {filterType === 'Age'
                    ? ageGroups.map((age) => (
                        <div key={age} className="flex items-center gap-1">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: ageGroupColors[age] }}
                            />
                            <span className="text-gray-600">{age}</span>
                        </div>
                    ))
                    : Object.entries(colors).map(([key, color]) => (
                        <div key={key} className="flex items-center gap-1">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: color }}
                            />
                            <span className="text-gray-600">{key}</span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

const EleyaTwinPage = () => {
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Data for first chart - adapted for EleyaTwin
    const surveyAccuracyData = [
        { label: 'Very accurate', value: 32 },
        { label: 'Somewhat accurate', value: 28 },
        { label: 'Not accurate', value: 12 }
    ];

    // Data for second chart - adapted for EleyaTwin
    const aiTrustData = [
        {
            category: 'Trust AI completely',
            values: {
                '25-34': 8,
                '35-49': 6,
                '50-64': 3,
                '65-74': 2,
                '75+': 1
            }
        },
        {
            category: 'Trust AI partially',
            values: {
                '25-34': 12,
                '35-49': 15,
                '50-64': 8,
                '65-74': 6,
                '75+': 4
            }
        },
        {
            category: 'Don\'t trust AI',
            values: {
                '25-34': 3,
                '35-49': 5,
                '50-64': 7,
                '65-74': 9,
                '75+': 12
            }
        },
        {
            category: 'Need more information',
            values: {
                '25-34': 2,
                '35-49': 4,
                '50-64': 3,
                '65-74': 2,
                '75+': 1
            }
        }
    ];

    return (
        <BasePage>
            <section className="hero-intro relative min-h-[36rem] md:h-[36rem] overflow-visible -mt-16" style={{
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
                <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-40 pb-8 md:pb-0">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="font-display font-semibold text-[#194471] leading-tight mb-6" style={{
                            fontSize: 'clamp(2rem, 8vw, 4.5rem)',
                            lineHeight: 1.15
                        }}>
                            EleyaTwin
                        </h1>
                        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed font-sans mb-8" style={{
                            fontSize: 'clamp(1.125rem, 4.5vw, 1.25rem)',
                            lineHeight: 1.4
                        }}>
                            EleyaTwin is an AI-powered research platform. Our customers conduct their surveys on Digital Twins of their target population on EleyaTwin.
                        </p>
                        <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed font-sans mb-8" style={{
                            fontSize: 'clamp(1rem, 4vw, 1.125rem)',
                            lineHeight: 1.5,
                            wordBreak: 'normal',
                            overflowWrap: 'anywhere'
                        }}>
                            Augment your survey data with AI to multiply insights and boost your customer understanding to deliver them more value.
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

            <section className="-mt-20 pb-16 relative z-30" style={{
                backgroundColor: '#FFFDF8',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.05) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20 pt-12">
                        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-gray-800 mb-4">
                            How EleyaTwin Works
                        </h2>
                        <p className="text-lg text-gray-500 max-w-2xl mx-auto font-sans">
                            Three simple steps to revolutionize your research process
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-20">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="w-14 h-14 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0">
                                <CloudArrowUpIcon className="w-7 h-7 text-gray-700" />
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Upload your Dataset
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Upload quantitative or qualitative data to create your Digital Twins and build accurate virtual representations of your target population.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="w-14 h-14 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0">
                                <UserGroupIcon className="w-7 h-7 text-gray-700" />
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Survey your Virtual Audience
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Design your next survey on your Virtual Audience with intuitive tools and conduct research at scale without traditional limitations.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                            <div className="w-14 h-14 bg-white shadow-lg rounded-xl flex items-center justify-center flex-shrink-0">
                                <ChartBarIcon className="w-7 h-7 text-gray-700" />
                            </div>
                            <div className="text-center lg:text-left">
                                <h3 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Extract Results in Your Format
                                </h3>
                                <p className="text-gray-600 font-sans leading-relaxed text-lg">
                                    Analyze survey results directly on our platform and extract the data in your preferred format for seamless integration with your workflow.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Study Results Section */}
            <section className="relative py-16" style={{
                backgroundColor: '#FFF0E1',
                backgroundImage: 'radial-gradient(rgba(25, 68, 113, 0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div
                        ref={titleRef}
                        className={`text-center mb-12 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-8 h-8 bg-[#194471] rounded-lg flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-gray-800">
                                Study Results
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Real-time insights from our AI-powered survey platform
                        </p>
                    </div>

                    {/* Charts Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <BarChart
                            data={surveyAccuracyData}
                            question="How accurate is the battery life prediction on your smartphone or laptop?"
                            isAnimated={true}
                            delay={200}
                        />
                        <StackedBarChart
                            data={aiTrustData}
                            question="How much do you trust AI-powered wearables to accurately monitor and alert you to potential health issues?"
                            delay={400}
                        />
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default EleyaTwinPage; 