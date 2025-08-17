import React, { useState, useEffect } from 'react';
import BasePage from './BasePage';

const DemoPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '51b85d8a-fbcc-48e6-a5be-5e6aed8702b3',
                    to: 'william.burner675@gmail.com',
                    subject: `Demo Request from ${formData.firstName} ${formData.lastName}`,
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: `
                        Demo Request Details:
                        
                        Name: ${formData.firstName} ${formData.lastName}
                        Email: ${formData.email}
                        Company: ${formData.company}
                        Job Title: ${formData.jobTitle}
                        
                        Message:
                        ${formData.message}
                    `
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                // Reset form
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    jobTitle: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <BasePage>
            {/* Hero Section with exact dotted background from landing page */}
            <section className="relative min-h-screen overflow-hidden flex items-center justify-center -mt-16" style={{
                backgroundColor: 'transparent',
                backgroundImage: 'radial-gradient(rgba(254, 195, 147, 0.3) 1px, transparent 1px)',
                backgroundSize: '24px 24px'
            }}>
                {/* Background Images - same as landing page */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://framerusercontent.com/images/lysrb9oLsW8SXarkxi4Kp9N2FM.png"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-orange-100/20 to-transparent"></div>
                </div>

                {/* Light Flare Overlay - same as landing page */}
                <div className="absolute inset-0 z-10">
                    <img
                        src="https://framerusercontent.com/images/xdIsSG8TXSulnA0CMVea6YY2Q.png"
                        alt="Light Flare"
                        className="w-full h-full object-cover mix-blend-overlay"
                    />
                </div>

                {/* Main content */}
                <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-4xl mx-auto">
                        {/* Header */}
                        <div className={`text-center mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gray-800 leading-tight mb-6">
                                Request a Demo
                            </h1>
                            <p className="text-xl text-gray-500 leading-relaxed font-sans max-w-2xl mx-auto">
                                See Intelly in action. Book a personalized demo and discover how our AI-powered analytics can transform your business.
                            </p>
                        </div>

                        {/* Form Card - Made wider */}
                        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
                            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-8 sm:p-12 lg:p-16">
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-8 text-center">
                                    Book your demo
                                </h2>

                                {/* Success Message */}
                                {submitStatus === 'success' && (
                                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-green-800">
                                                    Thank you! Your demo request has been sent successfully. We'll contact you soon.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Error Message */}
                                {submitStatus === 'error' && (
                                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-red-800">
                                                    Something went wrong. Please try again or contact us directly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
                                    {/* Name fields */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm disabled:opacity-50"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm disabled:opacity-50"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                            Work Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm disabled:opacity-50"
                                            placeholder="john@company.com"
                                        />
                                    </div>

                                    {/* Company */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                            Company *
                                        </label>
                                        <input
                                            type="text"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleInputChange}
                                            required
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm disabled:opacity-50"
                                            placeholder="Company Inc."
                                        />
                                    </div>

                                    {/* Job Title */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                            Job Title
                                        </label>
                                        <input
                                            type="text"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleInputChange}
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm disabled:opacity-50"
                                            placeholder="e.g. Data Analyst, Marketing Manager"
                                        />
                                    </div>

                                    {/* Demo interests */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-3 font-sans">
                                            What would you like to see in the demo?
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            disabled={isSubmitting}
                                            className="w-full px-4 py-4 bg-white/70 border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#194471]/50 focus:border-[#194471]/50 transition-all duration-200 font-sans backdrop-blur-sm resize-none disabled:opacity-50"
                                            placeholder="Tell us about your specific use case or questions..."
                                        ></textarea>
                                    </div>

                                    {/* Submit button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#194471] hover:bg-[#194471]/90 text-white px-8 py-4 rounded-xl font-display font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            'Request Demo'
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom gradient fade - same as landing page */}
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/40 via-orange-50/30 to-transparent z-30"></div>
            </section>
        </BasePage>
    );
};

export default DemoPage; 