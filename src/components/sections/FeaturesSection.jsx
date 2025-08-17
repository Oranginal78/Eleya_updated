import React, { useEffect, useRef, useState } from 'react';
import {
    UserGroupIcon,
    ClockIcon,
    ChartBarIcon
} from '@heroicons/react/24/outline';

const FeatureCard = ({ icon: Icon, title, description, delay = 0, image }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
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

    // Précharger l'image
    useEffect(() => {
        if (image) {
            const img = new Image();
            img.onload = () => {
                setImageLoaded(true);
            };
            img.onerror = () => {
                setImageError(true);
            };
            img.src = image;
        }
    }, [image]);

    return (
        <div
            ref={cardRef}
            className={`group relative rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
            style={{ minHeight: '520px' }}
        >
            {/* Image de fond */}
            <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{
                    backgroundImage: (image && imageLoaded && !imageError) ? `url(${image})` : 'none',
                    backgroundColor: '#f8fafc'
                }}
            >
                {/* Fallback icon si pas d'image ou erreur */}
                {(!image || !imageLoaded || imageError) && (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <Icon className="w-8 h-8 text-blue-500" />
                        </div>
                    </div>
                )}
            </div>

            {/* Overlay et contenu */}
            <div className="relative h-full flex flex-col justify-start min-h-[520px]">
                {/* Overlay sombre en haut pour la lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>

                {/* Contenu textuel en haut avec hauteurs fixes pour alignement */}
                <div className="relative px-8 pt-6 pb-8 flex flex-col">
                    <h3 className="text-base font-display font-semibold text-white mb-3 h-8 flex items-start leading-tight">
                        {title}
                    </h3>
                    <p className="text-white/90 leading-relaxed font-sans text-sm min-h-[90px] flex items-start">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: UserGroupIcon,
            title: "Digital Twins",
            description: "Create digital twins that mimic the behavior, preferences, and opinions of your target audience with training data.",
            image: "/images/illustr1.jpg"
        },
        {
            icon: ClockIcon,
            title: "Real-time interrogation",
            description: "Submit your survey to your AI panel of digital twins. Access hard-to-reach audiences and cut research delays.",
            image: "/images/illustr2.jpg"
        },
        {
            icon: ChartBarIcon,
            title: "Data Visualization & Extraction",
            description: "Analyze results directly on our platform with intuitive visualization tools or extract the data in your format of choice.",
            image: "/images/histo1.jpg"
        }
    ];

    return (
        <section className="relative py-6" style={{
            backgroundColor: '#FFF8ED'
        }}>
            {/* Contenu principal avec fond uni */}
            <div className="relative z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={index}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                delay={index * 100}
                                image={feature.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection; 