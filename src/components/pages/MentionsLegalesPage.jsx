import React from 'react';
import { Link } from 'react-router-dom';
import BasePage from './BasePage';

const MentionsLegalesPage = () => {
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
                            Legal Notice
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
                            Legal information regarding the ELEYA website and company.
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
                            {/* Company Identification */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    1. Company Identification
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p><strong>Company Name:</strong> ELEYA</p>
                                    <p><strong>Legal Form:</strong> Simplified Joint-Stock Company (SAS)</p>
                                    <p><strong>Share Capital:</strong> €100,000</p>
                                    <p><strong>Registered Office:</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
                                    <p><strong>RCS:</strong> Paris B 123 456 789</p>
                                    <p><strong>SIRET:</strong> 123 456 789 00012</p>
                                    <p><strong>APE Code:</strong> 6202A</p>
                                    <p><strong>VAT Number:</strong> FR12345678901</p>
                                </div>
                            </div>

                            {/* Publication Director */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    2. Publication Director
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p><strong>Publication Director:</strong> [Director Name]</p>
                                    <p><strong>Email:</strong> contact@eleya.ai</p>
                                    <p><strong>Phone:</strong> +33 1 23 45 67 89</p>
                                </div>
                            </div>

                            {/* Website Hosting */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    3. Website Hosting
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p><strong>Host:</strong> [Host Name]</p>
                                    <p><strong>Address:</strong> [Host Address]</p>
                                    <p><strong>Phone:</strong> [Host Phone]</p>
                                </div>
                            </div>

                            {/* Intellectual Property */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    4. Intellectual Property
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        All content on this website (texts, images, videos, logos, icons, etc.)
                                        is protected by French and international intellectual property laws.
                                    </p>
                                    <p>
                                        Any reproduction, representation, modification, publication, adaptation of all or part
                                        of the website elements, regardless of the means or process used, is prohibited
                                        without prior written authorization from ELEYA.
                                    </p>
                                    <p>
                                        Any unauthorized use of the site or any of its contents
                                        will be considered as constituting counterfeiting and prosecuted in accordance with
                                        the provisions of articles L.335-2 and following of the Intellectual Property Code.
                                    </p>
                                </div>
                            </div>

                            {/* Personal Data */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    5. Personal Data Protection
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        In accordance with the General Data Protection Regulation (GDPR) and the
                                        "Data Protection Act", you have the right of access, rectification,
                                        deletion and opposition to personal data concerning you.
                                    </p>
                                    <p>
                                        To exercise these rights or for any question regarding the processing of your personal
                                        data, you can contact us at: contact@eleya.ai
                                    </p>
                                    <p>
                                        For more information, consult our
                                        <Link to="/privacy-policy" className="text-[#194471] hover:text-[#194471]/80 underline ml-1">
                                            Privacy Policy
                                        </Link>.
                                    </p>
                                </div>
                            </div>

                            {/* Liability */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    6. Limitation of Liability
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        ELEYA strives to provide information on the site as accurate as possible.
                                        However, it cannot be held responsible for omissions, inaccuracies and
                                        deficiencies in updating, whether they are its fault or that of third parties
                                        partners who provide this information.
                                    </p>
                                    <p>
                                        All information indicated on the site is given for information purposes only, and is
                                        subject to change. Furthermore, the information on the site is
                                        not exhaustive.
                                    </p>
                                </div>
                            </div>

                            {/* Applicable Law */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    7. Applicable Law and Jurisdiction
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        This legal notice is governed by French law. In case of dispute,
                                        French courts will have sole jurisdiction.
                                    </p>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="bg-[#194471]/10 p-6 rounded-lg">
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    8. Contact
                                </h2>
                                <div className="text-gray-600 font-sans space-y-2">
                                    <p>
                                        For any questions regarding this legal notice, you can contact us:
                                    </p>
                                    <p><strong>Email:</strong> contact@eleya.ai</p>
                                    <p><strong>Phone:</strong> +33 1 23 45 67 89</p>
                                    <p><strong>Address:</strong> 123 Avenue des Champs-Élysées, 75008 Paris, France</p>
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

export default MentionsLegalesPage; 