import React, { useEffect, useRef, useState } from 'react';

const PartnersSection = () => {
    const [titleVisible, setTitleVisible] = useState(false);
    const [logosVisible, setLogosVisible] = useState(false);
    const titleRef = useRef(null);
    const logosRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                    setTimeout(() => setLogosVisible(true), 300);
                }
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLogosVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (logosRef.current) {
            observer.observe(logosRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const partners = [
        {
            name: "Publicis Groupe",
            logo: "/images/Logo Publicis Groupe.png",
            description: "Global communications leader"
        },
        {
            name: "Ipsos",
            logo: "/images/Logo Ipsos.png",
            description: "Market research and polling"
        },
        {
            name: "MIT",
            logo: "/images/MIT Logo.png",
            description: "Massachusetts Institute of Technology"
        }
    ];

    return (
        <section className="relative py-16" style={{
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
                        Partnering with industry leaders and innovators
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We collaborate with world-renowned organizations to deliver cutting-edge AI-powered analytics solutions
                    </p>
                </div>

                {/* Partners Logos */}
                <div
                    ref={logosRef}
                    className={`grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center transition-all duration-1000 ${logosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center group"
                            style={{
                                animationDelay: `${index * 200}ms`
                            }}
                        >
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#194471]/10 hover:shadow-lg hover:border-[#194471]/20 transition-all duration-500 mb-4 group-hover:scale-105">
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="h-16 w-auto object-contain transition-all duration-300"
                                    style={{
                                        maxWidth: '200px'
                                    }}
                                />
                            </div>
                            <h3 className="text-lg font-display font-semibold text-gray-800 mb-2 text-center">
                                {partner.name}
                            </h3>
                            <p className="text-sm text-gray-600 text-center">
                                {partner.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection; 