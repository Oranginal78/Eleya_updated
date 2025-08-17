import React from 'react';
import BasePage from './BasePage';

const TermsOfUsePage = () => {
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
                            Terms of Service
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
                            Welcome to our Terms of Service, and thank you for your interest in Eleya S.A.S. ("Eleya", "our", "we" or "us"). These Terms of Service ("Terms") govern your access to and use of the Eleya website, platform, and services (collectively, the "Services"). Please read these Terms carefully before using our Services. By accessing or using any part of the Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use, enter, connect to, or access to the Services.
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

                            {/* Eligibility */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    1. Eligibility
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        You must be at least 18 years old to use the Services. By creating an account, you represent that you are at least eighteen (18) years old and that the information that you provide is accurate and complete.
                                    </p>
                                </div>
                            </div>

                            {/* Account Creation & Responsibilities */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    2. Account Creation & Responsibilities
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        You are responsible for maintaining the confidentiality of your account login and password, and are fully responsible for all activities that occur under your account. Notify us immediately of any unauthorized use of your account. Eleya will not be liable for any loss or damage arising from any unauthorized use of your account or your failure to comply with the above requirements.
                                    </p>
                                </div>
                            </div>

                            {/* Use of Services */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    3. Use of Services
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Subject to this Agreement, Eleya grants you a limited, non-exclusive, non-transferable, non-assignable, and revocable license to access and use the Services for their intended purposes. You may not modify, copy, distribute, transmit, display, reproduce, publish, license, create derivative works from, transfer or sell any content, software, products or services obtained from the Services without our prior written consent.
                                    </p>
                                </div>
                            </div>

                            {/* Use Restrictions */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    4. Use Restrictions
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        You agree to use the Services in compliance with all applicable laws and regulations. You shall not, directly or indirectly, and shall not authorize any third party to (i) modify, translate, convert to another programming language, reverse engineer, decompile, debug, reproduce in any form, or disassemble the Services; (ii) Interfere with the functionality or security features of the Services; (iii) Attempt to gain unauthorized access to the Services or its related systems.
                                    </p>
                                </div>
                            </div>

                            {/* Ownership */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    5. Ownership
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        The Services and their original content, features, and functionality are owned by Eleya. The User shall not have or obtain any right, title, or interest therein except for the limited right to use the Services in accordance with the terms expressly set forth in the Terms.
                                    </p>
                                </div>
                            </div>

                            {/* Customer Data */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    6. Customer Data
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        In the event that you elect to provide Your Data to the Services, you hereby grant Eleya a non-exclusive right and license to collect, access, process, use and reproduce Your Data for the purpose of providing the Services to You. You further agree not to provide, and represent and warrant that any of Your Data that is provided to the Services will not contain: (i) any sensitive information (any payment card data, individually identifiable health information or protected health information, government-issued identification numbers), (ii) any personal information (any information that constitutes "personal information", "personal data", "personally identifiable information" or similar term that is subject to privacy laws, including but not limited to the California Consumer Privacy Act of 2018 and the European Union General Data Protection Regulation of 2016/679) or (iii) any content or material that we would consider as unacceptable to us in our sole discretion.
                                    </p>
                                </div>
                            </div>

                            {/* Third-Party Services */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    7. Third-Party Services
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        The Services may contain links to third-party websites or services that are not owned or controlled by Eleya. We have no control over the content, privacy policies, or practices of any third-party sites. Such third-party links are not under the control of Eleya, and Eleya is not responsible for any third-party links.
                                    </p>
                                </div>
                            </div>

                            {/* Termination */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    8. Termination
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Eleya may suspend or terminate your access to the Services at any time for any reason, including if we reasonably believe you have violated these Terms. Upon termination, (i) the license to the Services granted hereunder shall terminate automatically; (ii) each part shall return the other party any Confidential Information of the other part, and (iii) User shall promptly pay in full any outstanding payments.
                                    </p>
                                </div>
                            </div>

                            {/* Disclaimer of Warranties and Limitation of Liability */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    9. Disclaimer of Warranties and Limitation of Liability
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        The Services are provided on an "as is" basis, without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance. Eleya does not warrant that the Services will be uninterrupted, secure, or error-free. Eleya shall have no liability to User or any third-party for any claim, loss, expense, or damage caused or alleged to be caused by the Services, even if Eleya is notified in advance of the possibility of such damages.
                                    </p>
                                </div>
                            </div>

                            {/* Indemnification */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    10. Indemnification
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        You agree to defend, indemnify and hold Eleya harmless from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms or your use of the Services.
                                    </p>
                                </div>
                            </div>

                            {/* Changes to Terms */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    11. Changes to Terms
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        We reserve the right to modify these Terms at any time, providing notice on our website or by other means in the case of substantial changes. Your continued use of the Services after any changes constitutes your acceptance of the new Terms.
                                    </p>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="bg-[#194471]/10 p-6 rounded-lg">
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    12. Contact Us
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p>contact@eleya.eu</p>
                                </div>
                            </div>

                            {/* Final Agreement */}
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <div className="text-gray-600 font-sans space-y-4 text-sm">
                                    <p>
                                        These Terms constitute the entire agreement between you and Eleya regarding the use of the Services. If any provision of these Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall be enforced. These Terms shall be governed by and construed in accordance with the laws of France, excluding any conflict of laws principles that would require the application of the laws on another jurisdiction.
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

export default TermsOfUsePage; 