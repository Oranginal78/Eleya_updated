import React from 'react';
import BasePage from './BasePage';

const CookiesPage = () => {
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
                            Cookie Policy
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
                            How we use cookies and similar technologies to enhance your experience.
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

                            {/* What Are Cookies */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    1. What Are Cookies?
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Cookies are small text files that are stored on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our site.
                                    </p>
                                    <p>
                                        This Cookie Policy explains what cookies are, how we use them, the types of cookies we use, and how you can control your cookie preferences.
                                    </p>
                                </div>
                            </div>

                            {/* How We Use Cookies */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    2. How We Use Cookies
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>We use cookies for several purposes:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>To ensure our website functions properly</li>
                                        <li>To remember your preferences and settings</li>
                                        <li>To analyze how you use our website and improve performance</li>
                                        <li>To provide personalized content and recommendations</li>
                                        <li>To understand our audience and optimize our services</li>
                                        <li>To prevent fraud and enhance security</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Types of Cookies */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    3. Types of Cookies We Use
                                </h2>
                                <div className="text-gray-600 font-sans space-y-6">
                                    <div>
                                        <h3 className="text-lg font-display font-medium text-gray-700 mb-2">Essential Cookies</h3>
                                        <p>
                                            These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility. You cannot opt-out of these cookies.
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2"><strong>Examples:</strong> Session management, authentication, load balancing</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-display font-medium text-gray-700 mb-2">Performance Cookies</h3>
                                        <p>
                                            These cookies collect information about how you use our website, which pages you visit most often, and if you receive error messages. This data helps us improve our website's performance.
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2"><strong>Examples:</strong> Google Analytics, page load times, error tracking</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-display font-medium text-gray-700 mb-2">Functional Cookies</h3>
                                        <p>
                                            These cookies allow our website to remember choices you make and provide enhanced, more personal features. They may also be used to provide services you have requested.
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2"><strong>Examples:</strong> Language preferences, user interface settings, remembered login details</p>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-display font-medium text-gray-700 mb-2">Marketing Cookies</h3>
                                        <p>
                                            These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad. These cookies can share information with other organizations.
                                        </p>
                                        <p className="text-sm text-gray-500 mt-2"><strong>Examples:</strong> Social media tracking, advertising networks, retargeting</p>
                                    </div>
                                </div>
                            </div>

                            {/* Third-Party Cookies */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    4. Third-Party Cookies
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide enhanced functionality.
                                    </p>
                                    <p>Third-party services we use include:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                                        <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
                                        <li><strong>Marketing Tools:</strong> For email marketing and customer engagement</li>
                                        <li><strong>Customer Support:</strong> For chat and support functionality</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Cookie Duration */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    5. Cookie Duration
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>Cookies can be classified by their duration:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
                                        <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until you delete them</li>
                                    </ul>
                                    <p>
                                        Most of our cookies are session cookies, with persistent cookies typically lasting from 30 days to 2 years, depending on their purpose.
                                    </p>
                                </div>
                            </div>

                            {/* Managing Cookies */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    6. Managing Your Cookie Preferences
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>You have several options for managing cookies:</p>

                                    <div>
                                        <h3 className="text-lg font-display font-medium text-gray-700 mb-2">Browser Settings</h3>
                                        <p>Most web browsers allow you to control cookies through their settings. You can:</p>
                                        <ul className="list-disc pl-6 space-y-1 mt-2">
                                            <li>View what cookies are stored and delete them individually</li>
                                            <li>Block third-party cookies</li>
                                            <li>Block cookies from particular sites</li>
                                            <li>Block all cookies from being set</li>
                                            <li>Delete all cookies when you close your browser</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-display font-medium text-gray-700 mb-2">Cookie Consent Banner</h3>
                                        <p>
                                            When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies you want to accept.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Impact of Disabling Cookies */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    7. Impact of Disabling Cookies
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>While you can disable cookies, doing so may affect your experience on our website:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li>Some features may not work properly</li>
                                        <li>You may need to re-enter information frequently</li>
                                        <li>Personalized content and recommendations won't be available</li>
                                        <li>We won't be able to remember your preferences</li>
                                    </ul>
                                    <p>Essential cookies cannot be disabled as they are necessary for the website to function.</p>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    8. Contact Us
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>If you have any questions about our use of cookies or this Cookie Policy, please contact us at:</p>
                                    <div className="bg-[#194471]/10 p-6 rounded-lg">
                                        <p>contact@eleya.eu</p>
                                    </div>
                                </div>
                            </div>

                            {/* Updates to This Policy */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    9. Updates to This Policy
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        We may update this Cookie Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. When we make changes, we will update the "Last Updated" date at the bottom of this page.
                                    </p>
                                    <p>
                                        We encourage you to review this Cookie Policy periodically to stay informed about how we use cookies.
                                    </p>
                                    <div className="bg-gray-50 p-4 rounded-lg mt-6">
                                        <p className="text-sm text-gray-500">
                                            <strong>Last Updated:</strong> January 2025
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </BasePage>
    );
};

export default CookiesPage; 