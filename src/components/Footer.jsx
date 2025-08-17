import React from 'react';
import { Link } from 'react-router-dom';
import {
    LinkedinIcon
} from 'lucide-react';
import eleyaLogo from '../assets/images/logo11.png';

const Footer = () => {
    const platformPages = [
        { name: 'EleyaTwin', href: '/eleyatwin' },
        { name: 'FranceGPT', href: '/francegpt' }
    ];

    const solutionsPages = [
        { name: 'Segmentation and U&A', href: '/solutions/segmentation-ua' },
        { name: 'Claim Testing', href: '/solutions/claim-testing' },
        { name: 'Opinion', href: '/solutions/opinion' },
        { name: 'Brand Perception', href: '/solutions/brand-perception' }
    ];

    const blogPages = [
        { name: 'Blog', href: '/blog' }
    ];

    const legalPages = [
        { name: 'Privacy Policy', href: '/privacy-policy' },
        { name: 'Terms of Service', href: '/terms-of-use' },
        { name: 'Cookies', href: '/cookies' }
    ];

    return (
        <footer className="w-full" style={{
            backgroundColor: '#2A2D33',
            backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.05) 1px, transparent 1px)',
            backgroundSize: '22px 22px'
        }}>
            <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Logo et CTA Demo */}
                        <div className="lg:col-span-4">
                            <div className="flex items-center mb-4">
                                <img
                                    src={eleyaLogo}
                                    alt="Eleya Logo"
                                    className="h-12 w-auto object-contain filter brightness-0 invert"
                                />
                            </div>

                            <div className="mb-6">
                                <h3 className="text-white font-display font-medium mb-3">Book a demo</h3>
                                <p className="text-gray-400 text-sm mb-4 font-sans">
                                    Discover how our AI-powered analytics can transform your business with a personalized demonstration.
                                </p>
                                <Link
                                    to="/demo"
                                    className="inline-flex items-center justify-center bg-[#194471] hover:bg-[#194471]/90 text-white font-display font-medium px-6 py-3 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    Request Demo
                                </Link>
                            </div>

                            {/* Social Icons - Only LinkedIn */}
                            <div className="flex space-x-3">
                                <a href="https://www.linkedin.com/company/eleya-eu/?originalSubdomain=fr" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-700 hover:bg-[#194471] rounded-lg flex items-center justify-center transition-colors duration-200">
                                    <LinkedinIcon className="w-4 h-4 text-gray-300 hover:text-white" />
                                </a>
                            </div>
                        </div>

                        {/* Pages organized by categories */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-5 gap-8">
                            {/* Platform */}
                            <div>
                                <h3 className="text-white font-display font-medium mb-3">Platform</h3>
                                <ul className="space-y-2">
                                    {platformPages.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.href}
                                                className="text-gray-400 hover:text-[#194471] font-sans text-sm transition-colors duration-200"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Solutions */}
                            <div>
                                <h3 className="text-white font-display font-medium mb-3">Solutions</h3>
                                <ul className="space-y-2">
                                    {solutionsPages.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.href}
                                                className="text-gray-400 hover:text-[#194471] font-sans text-sm transition-colors duration-200"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Empty column for spacing */}
                            <div></div>

                            {/* Blog & Contact - shifted right */}
                            <div>
                                <h3 className="text-white font-display font-medium mb-3">Blog</h3>
                                <ul className="space-y-2">
                                    {blogPages.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.href}
                                                className="text-gray-400 hover:text-[#194471] font-sans text-sm transition-colors duration-200"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="text-white font-display font-medium mb-3">Legal</h3>
                                <ul className="space-y-2">
                                    {legalPages.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                to={link.href}
                                                className="text-gray-400 hover:text-[#194471] font-sans text-sm transition-colors duration-200"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 mt-8 pt-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <p className="text-gray-400 font-sans text-sm">© Eleya, all rights reserved 2025</p>
                            </div>

                            <div className="flex items-center space-x-6">
                                <Link to="/terms-of-use" className="text-gray-400 hover:text-[#194471] font-sans text-sm transition-colors duration-200">
                                    Terms
                                </Link>
                                <Link to="/privacy-policy" className="text-gray-400 hover:text-[#194471] font-sans text-sm transition-colors duration-200">
                                    Privacy
                                </Link>
                                <Link to="/cookies" className="text-gray-400 hover:text-[#194471] font-sans text-sm transition-colors duration-200">
                                    Cookies
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 