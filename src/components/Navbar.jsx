import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import eleyaLogo from '../assets/images/logo11.png';

const Navbar = ({ variant = 'default' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to scroll to top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMobileMenuOpen(false);
    };

    // Get navbar styles based on variant
    const getNavbarStyles = () => {
        if (variant === 'blog') {
            return {
                container: 'bg-transparent',
                scrolledContainer: 'max-w-3xl mx-auto bg-white/95 backdrop-blur-sm shadow-lg rounded-2xl px-4 py-1',
                textColor: 'text-gray-700 hover:text-[#194471]'
            };
        }
        return {
            container: 'bg-transparent',
            scrolledContainer: 'max-w-3xl mx-auto bg-white shadow-2xl border border-gray-200 rounded-2xl px-4 py-1',
            textColor: 'text-gray-700 hover:text-[#194471]'
        };
    };

    const styles = getNavbarStyles();

    const platformItems = [
        { name: 'EleyaTwin', href: '/eleyatwin', description: 'Our digital twins platform' },
        { name: 'FranceGPT', href: '/francegpt', description: 'French conversational AI' }
    ];

    const solutions = {
        'Solutions': [
            { name: 'Segmentation and U&A', href: '/solutions/segmentation-ua', description: 'Understand hard-to-reach audiences better' },
            { name: 'Claim Testing', href: '/solutions/claim-testing', description: 'Validate claims with comprehensive insights' },
            { name: 'Opinion', href: '/solutions/opinion', description: 'Reliably analyze underrepresented groups' },
            { name: 'Brand Perception and Satisfaction', href: '/solutions/brand-perception', description: 'Unlock granular insights even with fast studies' }
        ]
    };

    const otherPages = [
        { name: 'Blog', href: '/blog', description: 'Insights and news' }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50" style={{ paddingTop: 0, marginTop: 0 }}>
            <div className="w-full px-4 sm:px-6 lg:px-8" style={{ paddingTop: '1.5rem' }}>
                <div
                    className={`transition-all duration-700 ease-out relative ${isScrolled
                        ? styles.scrolledContainer
                        : 'max-w-7xl mx-auto px-6'
                        }`}
                    style={{
                        transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        willChange: 'transform, max-width, padding, border-radius, box-shadow',
                        transform: 'translateZ(0)' // Force hardware acceleration
                    }}
                >
                    <div className="flex items-center justify-between h-16 relative">
                        {/* Logo */}
                        <div className={`flex items-center transition-all duration-700 ease-out ${isScrolled ? 'translate-x-8' : 'translate-x-0'
                            }`}
                            style={{
                                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transform: `translateX(${isScrolled ? '2rem' : '0'}) translateZ(0)`
                            }}>
                            <Link to="/" className="flex items-center" onClick={scrollToTop}>
                                <img
                                    src={eleyaLogo}
                                    alt="Eleya Logo"
                                    className="h-14 w-auto object-contain"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation - Always centered, no scaling */}
                        <div className="hidden md:flex items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className={`flex items-center space-x-8 transition-all duration-700 ease-out ${isScrolled ? 'scale-95' : 'scale-100'}`}
                                style={{
                                    transform: `translateX(-40px) scale(${isScrolled ? '0.95' : '1'}) translateZ(0)`,
                                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                                }}>
                                {/* Plateforme Dropdown */}
                                <div className="relative group">
                                    <button className={`flex items-center text-sm font-medium transition-all duration-300 ${styles.textColor}`}>
                                        Platform
                                        <ChevronDownIcon className="ml-1 h-3 w-3 transition-all duration-300 group-hover:rotate-180" />
                                    </button>

                                    <div className="absolute top-full left-0 pt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100/50 overflow-hidden backdrop-blur-xl">
                                            <div className="p-4">
                                                <div className="space-y-1">
                                                    {platformItems.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            onClick={scrollToTop}
                                                            className="block p-2 rounded-lg hover:bg-[#194471]/5 transition-colors duration-200 group/item"
                                                        >
                                                            <div className="text-sm font-medium text-gray-800 group-hover/item:text-[#194471] transition-colors duration-200">
                                                                {item.name}
                                                            </div>
                                                            <div className="text-xs text-gray-500 mt-0.5">
                                                                {item.description}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Solutions Dropdown - central element */}
                                <div className="relative group">
                                    <button className={`flex items-center text-sm font-medium transition-all duration-300 ${styles.textColor}`}>
                                        Solutions
                                        <ChevronDownIcon className="ml-1 h-3 w-3 transition-all duration-300 group-hover:rotate-180" />
                                    </button>

                                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2 w-96 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out">
                                        <div className="bg-white rounded-xl shadow-xl border border-gray-100/50 overflow-hidden backdrop-blur-xl">
                                            <div className="p-4">
                                                <div className="grid grid-cols-2 gap-2">
                                                    {solutions['Solutions'].map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            onClick={scrollToTop}
                                                            className="block p-2 rounded-lg hover:bg-[#194471]/5 transition-colors duration-200 group/item"
                                                        >
                                                            <div className="text-sm font-medium text-gray-800 group-hover/item:text-[#194471] transition-colors duration-200">
                                                                {item.name}
                                                            </div>
                                                            <div className="text-xs text-gray-500 mt-0.5">
                                                                {item.description}
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Other Pages */}
                                {otherPages.map((page) => (
                                    <Link
                                        key={page.name}
                                        to={page.href}
                                        onClick={scrollToTop}
                                        className={`text-sm font-medium transition-all duration-300 ${styles.textColor}`}
                                    >
                                        {page.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className={`hidden md:flex items-center transition-all duration-700 ease-out ${isScrolled ? '-translate-x-8' : 'translate-x-0'
                            }`}
                            style={{
                                transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                transform: `translateX(${isScrolled ? '-2rem' : '0'}) translateZ(0)`
                            }}>
                            <Link
                                to="/demo"
                                onClick={scrollToTop}
                                className="px-5 py-2 rounded-full text-sm font-medium bg-[#194471] hover:bg-[#194471]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Request a Demo
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`transition-colors duration-300 ${styles.textColor}`}
                            >
                                {isMobileMenuOpen ? (
                                    <XMarkIcon className="h-6 w-6" />
                                ) : (
                                    <Bars3Icon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-4 mb-6">
                            <div className="bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-gray-100/50 p-4 space-y-3">
                                {/* Platform mobile */}
                                <div className="border-b border-gray-100 pb-3">
                                    <h3 className="text-xs font-semibold text-gray-800 mb-2">Platform</h3>
                                    {platformItems.map((item) => (
                                        <Link key={item.name} to={item.href} className="block text-sm text-gray-600 hover:text-[#194471] py-1.5 pl-3 transition-colors" onClick={scrollToTop}>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>

                                {/* Solutions mobile */}
                                <div className="border-b border-gray-100 pb-3">
                                    <h3 className="text-xs font-semibold text-gray-800 mb-2">Solutions</h3>
                                    <div className="grid grid-cols-2 gap-1">
                                        {solutions['Solutions'].map((item) => (
                                            <Link key={item.name} to={item.href} className="block text-sm text-gray-600 hover:text-[#194471] py-1.5 pl-3 transition-colors" onClick={scrollToTop}>
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Other Pages mobile */}
                                <div className="border-b border-gray-100 pb-3">
                                    <h3 className="text-xs font-semibold text-gray-800 mb-2">Other Pages</h3>
                                    {otherPages.map((page) => (
                                        <Link key={page.name} to={page.href} className="block text-sm text-gray-600 hover:text-[#194471] py-1.5 pl-3 transition-colors" onClick={scrollToTop}>
                                            {page.name}
                                        </Link>
                                    ))}
                                </div>

                                <div className="pt-3">
                                    <Link to="/demo" className="block bg-[#194471] hover:bg-[#194471]/90 text-white px-5 py-2.5 rounded-full text-sm font-medium text-center transition-all duration-200 shadow-md" onClick={scrollToTop}>
                                        Request a Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 