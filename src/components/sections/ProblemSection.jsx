import React, { useEffect, useRef, useState } from 'react';
import {
    UserGroupIcon,
    MegaphoneIcon,
    HeartIcon,
    LightBulbIcon
} from '@heroicons/react/24/outline';

const UseCaseCard = ({ icon: Icon, title, description, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={cardRef}
            className={`group bg-white rounded-xl p-8 shadow-sm border border-[#194471]/10 hover:shadow-lg hover:border-[#194471]/20 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
        >
            <div className="w-12 h-12 bg-[#194471]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#194471]/20 transition-colors duration-300">
                <Icon className="w-6 h-6 text-[#194471]" />
            </div>
            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed font-sans">
                {description}
            </p>
        </div>
    );
};

const UseCasesSection = () => {
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

    const useCases = [
        {
            icon: UserGroupIcon,
            title: "Segmentation and U&A",
            description: "Deep-dive into customer habits to identify actionable growth opportunities"
        },
        {
            icon: MegaphoneIcon,
            title: "Claim Testing",
            description: "Find out the top performing claims for all your products"
        },
        {
            icon: HeartIcon,
            title: "Brand Perception & Satisfaction",
            description: "Identify key leverages to improve brand perception and customer satisfaction"
        },
        {
            icon: LightBulbIcon,
            title: "Concept Testing",
            description: "Try unlimited concepts on digital twins to identify winning ideas"
        }
    ];

    return (
        <section className="relative py-12" style={{
            backgroundColor: '#FFFDFB',
            borderBottom: '4px solid #FCB072'
        }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-gray-800 mb-6">
                        Use Cases
                    </h2>
                </div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {useCases.map((useCase, index) => (
                        <UseCaseCard
                            key={index}
                            icon={useCase.icon}
                            title={useCase.title}
                            description={useCase.description}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection; 