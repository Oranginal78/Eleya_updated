import React, { useEffect, useRef, useState } from 'react';

const VisionSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 overflow-hidden"
            style={{
                backgroundColor: '#FFF8ED'
            }}
        >
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="bg-[#194471] p-6 sm:p-8 shadow-lg w-full">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-white mb-4">
                            Eleya. Your Synthetic Data Partner.
                        </h2>
                        <p className="text-base sm:text-lg text-white/90 leading-relaxed font-sans">
                            We believe in combining Human Intelligence and Artificial Intelligence to reach an unprecedented level of understanding of human populations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionSection; 