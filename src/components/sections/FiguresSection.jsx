import React, { useEffect, useRef, useState } from 'react';

const CounterCard = ({ number, suffix, title, description, delay = 0, noAnimation = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(noAnimation ? number : 0);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsVisible(true);
                        // Start counting animation only if noAnimation is false
                        if (!noAnimation) {
                            const duration = 1000; // 1 second
                            const steps = 100;
                            const increment = number / steps;
                            let current = 0;

                            const timer = setInterval(() => {
                                current += increment;
                                if (current >= number) {
                                    setCount(number);
                                    clearInterval(timer);
                                } else {
                                    setCount(Math.floor(current));
                                }
                            }, duration / steps);
                        }
                    }, delay);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [number, delay, noAnimation]);

    return (
        <div
            ref={cardRef}
            className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            <div className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold text-[#194471] mb-4">
                {count.toLocaleString()}{suffix}
            </div>
            <p className="text-gray-600 font-sans text-lg">
                {description}
            </p>
        </div>
    );
};

const FiguresSection = () => {
    const figures = [
        {
            number: 80,
            suffix: '%',
            title: 'Cost reduction',
            description: 'Access niche audiences at a fraction of the cost'
        },
        {
            number: 1,
            suffix: 'h',
            title: 'Results in real-time',
            description: 'Get results in real-time'
        },
        {
            number: 150000,
            suffix: '',
            title: 'Digital twins simulated',
            description: 'More than 150,000 digital twins already simulated'
        }
    ];

    return (
        <section className="py-20 md:py-24" style={{
            backgroundColor: '#FFFBF7',
            backgroundImage: 'radial-gradient(rgba(25, 68, 113, 0.04) 1px, transparent 1px)',
            backgroundSize: '16px 16px md:24px md:24px',
            borderBottom: '4px solid #FCB072'
        }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Figures Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {figures.map((figure, index) => (
                        <CounterCard
                            key={index}
                            number={figure.number}
                            suffix={figure.suffix}
                            title={figure.title}
                            description={figure.description}
                            delay={index * 200}
                            noAnimation={figure.title === 'Results in real-time'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FiguresSection; 