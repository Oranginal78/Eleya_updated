import React from 'react';
import BasePage from './BasePage';

const PrivacyPolicyPage = () => {
    return (
        <BasePage>
            <section className="py-20" style={{
                background: 'linear-gradient(135deg, rgba(254, 200, 162, 0.1) 0%, rgba(254, 215, 170, 0.1) 100%)',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.08) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-semibold text-gray-800 leading-tight mb-6">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
                            Welcome and thanks for your interest in Eleya! We are dedicated to safeguarding your privacy. You will find here more information on how we collect, use, and protect your personal data when you are using our services.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20" style={{
                backgroundColor: '#FFFBF7',
                backgroundImage: 'radial-gradient(rgba(254, 200, 162, 0.05) 1px, transparent 1px)',
                backgroundSize: '22px 22px'
            }}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-[#194471]/10 space-y-8">

                            {/* Introduction */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Introduction
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        This Privacy Policy ("Policy") applies to Eleya website, platform, and services (collectively, the "Services").
                                    </p>
                                </div>
                            </div>

                            {/* Collecting Your Data */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Collecting Your Data (Website Visitors, Customers, FranceGPT Users)
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>When you are interacting with the Services, we may collect the following data:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Contact Information (name, email address, telephone number, company title, etc.)</li>
                                        <li>Technical Data (IP address, browser types, and operating system details, etc.)</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Specifically for FranceGPT */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Specifically for FranceGPT
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>The Data you provide in the optional Personality Test</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Using Your Data */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Using Your Data
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>We may use your data to:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Provide and improve our services</li>
                                        <li>Respond to inquiries and offer assistance</li>
                                        <li>Improving user experience and website functionalities</li>
                                        <li>Comply with legal requirements</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Cookies */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Cookies
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        We and certain third parties use cookies, and similar technologies to:
                                    </p>
                                </div>
                            </div>

                            {/* Sharing Information */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Sharing Information
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>We do not sell or rent your personal data. We share it only in limited ways with:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Service Providers assisting us in our business operations</li>
                                        <li>Legal authorities when required by law</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Your Rights */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Your Rights
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>Under data protection laws (GDPR, CCPA), you have certain rights regarding your personal data:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Access & Portability:</strong> You can request a copy of your personal data in a readable format</li>
                                        <li><strong>Rectification:</strong> Correct any inaccurate information</li>
                                        <li><strong>Erasure:</strong> Request erasure of your data where legally permitted</li>
                                        <li><strong>Object:</strong> Object to the processing of your personal data</li>
                                        <li><strong>Restrict:</strong> Request restriction of certain processing activities</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Security */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Security
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        We are dedicated to protect your personal data, using industry-standard measures such as access controls. We continuously improve your safeguard measures, though no method of storage is completely secured.
                                    </p>
                                </div>
                            </div>

                            {/* Changes to Privacy Policy */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Changes to Privacy Policy
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        We reserve the right to modify this Privacy Policy at any time, providing notice on our website or by other means in the case of substantial changes. Your continued use of the Services after any changes constitutes your acceptance of the new Privacy Policy.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="bg-[#194471]/10 p-6 rounded-lg">
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    Contact Information
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p>
                                        Reach out to us at contact@eleya.eu if you have any question or concern about our Policy.
                                    </p>
                                </div>
                            </div>

                            <div className="text-center pt-8">
                                <p className="text-gray-500 font-sans text-sm">
                                    Last updated: {new Date().toLocaleDateString('en-US')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default PrivacyPolicyPage; 