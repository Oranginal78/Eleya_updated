import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BasePage from './BasePage';
import { CheckIcon, ChartBarIcon, CpuChipIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const PlatformPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const features = [
        {
            icon: ChartBarIcon,
            title: "Real-time Analytics",
            description: "Get instant insights into your website performance with live data updates and comprehensive reporting."
        },
        {
            icon: CpuChipIcon,
            title: "AI-Powered Insights",
            description: "Leverage machine learning algorithms to uncover hidden patterns and predict future trends."
        },
        {
            icon: ShieldCheckIcon,
            title: "Enterprise Security",
            description: "Enterprise-grade security ensures your data is protected with end-to-end encryption."
        }
    ];

    const capabilities = [
        "Advanced data processing algorithms",
        "Real-time analytics dashboard",
        "Custom reporting tools",
        "API integrations",
        "Machine learning models",
        "Scalable infrastructure"
    ];

    return (
        <BasePage>
            {/* Hero Section - Fond principal harmonisé avec transition */}
            <section className="py-20" style={{
                background: 'linear-gradient(180deg, rgba(25, 68, 113, 0.06) 0%, rgba(37, 99, 235, 0.04) 50%, rgba(250, 251, 252, 0.4) 100%)',
                backgroundImage: 'radial-gradient(rgba(25, 68, 113, 0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className={`mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-gray-800 leading-tight mb-6">
                                The first and most trusted AI platform for analytics
                            </h1>
                            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-sans">
                                Generate near-real augmented insights and unlock granular analytics in every survey.
                            </p>
                        </div>

                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-block bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-lg font-display font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    Contact us
                                </Link>
                                <Link
                                    to="/contact"
                                    className="inline-block border border-[#194471]/20 hover:border-[#194471]/50 text-gray-600 hover:text-[#194471] px-8 py-4 rounded-lg font-display font-medium transition-all duration-200"
                                >
                                    What's feasible?
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section - Transition fluide sans bordure */}
            <section className="py-16" style={{
                background: 'linear-gradient(180deg, rgba(250, 251, 252, 0.4) 0%, rgba(250, 251, 252, 1) 40%, rgba(250, 251, 252, 1) 60%, rgba(25, 68, 113, 0.02) 100%)',
                backgroundImage: 'radial-gradient(rgba(25, 68, 113, 0.03) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-[#194471]/60 text-sm font-medium uppercase tracking-wide mb-8 font-sans">
                        Trusted by
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
                        {['Kantar', 'Ifop', 'BVA Family', 'Latenta', 'Prodege', 'Mindline'].map((company) => (
                            <div key={company} className="text-center">
                                <div className="h-12 flex items-center justify-center">
                                    <span className="font-display font-medium text-gray-400 hover:text-[#194471] transition-colors duration-200">{company}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Features Section - Gradient continu */}
            <section className="py-20" style={{
                background: 'linear-gradient(180deg, rgba(25, 68, 113, 0.02) 0%, rgba(25, 68, 113, 0.04) 40%, rgba(25, 68, 113, 0.04) 60%, rgba(255, 255, 255, 0.4) 100%)',
                backgroundImage: 'radial-gradient(rgba(25, 68, 113, 0.06) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-gray-800 mb-6">
                            Unveil insights into hard-to-reach niches without extra fieldwork
                        </h2>
                        <p className="text-lg text-gray-500 max-w-3xl mx-auto font-sans">
                            Intelly helps you reach rare or hard-to-access segments by generating predictive respondents that match your survey structure, all from your existing data.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-[#194471]/10 rounded-xl flex items-center justify-center mx-auto mb-6 hover:bg-[#194471]/20 transition-colors duration-200">
                                    <feature.icon className="w-8 h-8 text-[#194471]" />
                                </div>
                                <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 font-sans leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/demo"
                            className="inline-block bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-lg font-display font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trust Section - Transition fluide vers le blanc */}
            <section className="py-20" style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 80%, rgba(25, 68, 113, 0.02) 100%)',
                backgroundImage: 'radial-gradient(rgba(25, 68, 113, 0.02) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-gray-800 mb-6">
                            The holy trinity of trusted AI insights
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#194471]/10 hover:shadow-lg hover:border-[#194471]/20 transition-all duration-200">
                            <div className="w-12 h-12 bg-[#194471] text-white rounded-lg flex items-center justify-center mb-6 font-display font-semibold text-lg">
                                01
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Survey Integrity
                            </h3>
                            <p className="text-gray-500 font-sans mb-6">
                                Boosting only works when the questionnaire is respected. Tailor-made AI solutions for market research understand survey structure.
                            </p>
                            <div className="space-y-3">
                                {capabilities.slice(0, 3).map((capability, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckIcon className="w-5 h-5 text-[#194471] mr-3" />
                                        <span className="text-sm text-gray-600 font-sans">{capability}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#194471]/10 hover:shadow-lg hover:border-[#194471]/20 transition-all duration-200">
                            <div className="w-12 h-12 bg-[#194471] text-white rounded-lg flex items-center justify-center mb-6 font-display font-semibold text-lg">
                                02
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Predictive Power
                            </h3>
                            <p className="text-gray-500 font-sans mb-6">
                                The best machine learning models predict reality, not just simulate it. Trust is built when AI-generated respondents match reality.
                            </p>
                            <div className="space-y-3">
                                {capabilities.slice(2, 5).map((capability, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckIcon className="w-5 h-5 text-[#194471] mr-3" />
                                        <span className="text-sm text-gray-600 font-sans">{capability}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#194471]/10 hover:shadow-lg hover:border-[#194471]/20 transition-all duration-200">
                            <div className="w-12 h-12 bg-[#194471] text-white rounded-lg flex items-center justify-center mb-6 font-display font-semibold text-lg">
                                03
                            </div>
                            <h3 className="text-xl font-display font-semibold text-gray-800 mb-4">
                                Benchmark at Scale
                            </h3>
                            <p className="text-gray-500 font-sans mb-6">
                                Testing at scale separates real solutions from science projects. You can only trust AI if it performs consistently.
                            </p>
                            <div className="space-y-3">
                                {capabilities.slice(3, 6).map((capability, index) => (
                                    <div key={index} className="flex items-center">
                                        <CheckIcon className="w-5 h-5 text-[#194471] mr-3" />
                                        <span className="text-sm text-gray-600 font-sans">{capability}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Transition finale avec gradient de marque */}
            <section className="py-20" style={{
                background: 'linear-gradient(180deg, rgba(25, 68, 113, 0.02) 0%, rgba(25, 68, 113, 0.8) 30%, rgba(25, 68, 113, 1) 70%, rgba(37, 99, 235, 1) 100%)'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl sm:text-4xl font-display font-semibold text-white mb-6">
                            Ready to transform your analytics with AI?
                        </h2>
                        <p className="text-lg text-white/90 mb-8 font-sans">
                            Join thousands of businesses already using our platform to make data-driven decisions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/demo"
                                className="inline-block bg-white text-[#194471] hover:bg-gray-100 px-8 py-4 rounded-lg font-display font-medium transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                Request a Demo
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-block border border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-display font-medium transition-all duration-200"
                            >
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default PlatformPage; 