import React, { useEffect, useRef, useState } from 'react';

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
                            // Animate bars progressively
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

    // Ajuster les valeurs pour que les barres ne remplissent pas complètement la largeur
    const getBarWidth = (value, maxValue) => {
        const baseWidth = (value / maxValue) * 70; // Réduire de 100% à 70% max
        return baseWidth;
    };

    const maxValue = Math.max(...data.map(item => item.value));

    return (
        <div
            ref={chartRef}
            className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            {/* Header */}
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

            {/* Filter dropdown placeholder */}
            <div className="mb-6">
                <div className="relative">
                    <button className="w-full text-left px-3 py-2 border border-gray-200 rounded-lg text-gray-500 text-sm">
                        Select filter parameter
                    </button>
                </div>
            </div>

            {/* Chart */}
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

            {/* X-axis labels */}
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
        'Likely cannot cooperate': '#4FC3D7', // Cyan
        'Likely can cooperate': '#6BCF7C', // Green  
        'Not sure': '#A8E6CF', // Light green
        'Definitely cannot cooperate': '#5BC0EB', // Blue
        'Other': '#FFB366' // Orange
    };

    // Couleurs pour les tranches d'âge (exemple, à adapter si besoin)
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
            className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            {/* Header */}
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

            {/* Age filter */}
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

            {/* Chart */}
            <div className="space-y-3">
                {data.map((item, index) => {
                    const total = Object.values(item.values).reduce((sum, val) => sum + val, 0);
                    // Réduire la largeur totale pour que les barres ne remplissent pas complètement
                    const maxWidth = 75; // Largeur maximum en pourcentage

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

            {/* X-axis labels */}
            <div className="flex justify-between text-xs text-gray-400 mt-4 px-28">
                <span>0</span>
                <span>8</span>
                <span>16</span>
                <span>24</span>
                <span>32</span>
            </div>

            {/* Legend */}
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

const StudyResultsSection = () => {
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

    // Data for first chart (simple bar chart)
    const techAchievementsData = [
        { label: 'The best', value: 25 },
        { label: 'Above average', value: 28 },
        { label: 'Below average', value: 8 }
    ];

    // Data for second chart (stacked bar chart par âge, stats inventées et couleurs visibles)
    const cooperationData = [
        {
            category: 'Likely cannot cooperate',
            values: {
                '25-34': 3,
                '35-49': 5,
                '50-64': 9,
                '65-74': 10,
                '75+': 5
            }
        },
        {
            category: 'Likely can cooperate',
            values: {
                '25-34': 8,
                '35-49': 7,
                '50-64': 4,
                '65-74': 2,
                '75+': 1
            }
        },
        {
            category: 'Not sure',
            values: {
                '25-34': 2,
                '35-49': 5,
                '50-64': 2,
                '65-74': 1,
                '75+': 1
            }
        },
        {
            category: 'Definitely cannot cooperate',
            values: {
                '25-34': 1,
                '35-49': 1,
                '50-64': 2,
                '65-74': 3,
                '75+': 6
            }
        }
    ];

    return (
        <section className="relative py-20" style={{
            backgroundColor: '#FFF0E1',
            backgroundImage: 'radial-gradient(rgba(25, 68, 113, 0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
        }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
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
                        data={techAchievementsData}
                        question="How does the U.S. compare to other wealth nations in Technological achievements?"
                        isAnimated={true}
                        delay={200}
                    />
                    <StackedBarChart
                        data={cooperationData}
                        question="Do you think the U.S. and China can cooperate on Resolving international conflicts?"
                        delay={400}
                    />
                </div>
            </div>
        </section>
    );
};

export default StudyResultsSection; 