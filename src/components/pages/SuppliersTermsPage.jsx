import React from 'react';
import BasePage from './BasePage';

const SuppliersTermsPage = () => {
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
                            Suppliers Terms
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
                            Terms and conditions for our suppliers and business partners.
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
                                    1. Introduction
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        These general purchase conditions (the "Conditions") govern commercial relations
                                        between ELEYA (the "Company") and its suppliers (the "Suppliers"). They apply
                                        to all orders placed by the Company with its Suppliers.
                                    </p>
                                    <p>
                                        The acceptance of an order by a Supplier implies full and unreserved acceptance
                                        of these Conditions, to the exclusion of all other general or specific conditions
                                        of the Supplier.
                                    </p>
                                </div>
                            </div>

                            {/* Orders */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    2. Orders
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        All orders must be placed in writing (email, purchase order, electronic system).
                                        No verbal orders will be accepted.
                                    </p>
                                    <p>
                                        The Supplier has 48 hours to confirm acceptance of the order.
                                        After this period, the order will be considered refused.
                                    </p>
                                    <p>
                                        Any order modification must be subject to written agreement between the parties.
                                    </p>
                                </div>
                            </div>

                            {/* Price and payment */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    3. Price and Payment Conditions
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Prices are firm and final, expressed in euros excluding tax, ex-works or
                                        Supplier's warehouse, packaging included.
                                    </p>
                                    <p>
                                        Unless otherwise stipulated, invoices are payable at 30 days end of month of receipt
                                        of the invoice, subject to proper performance of services.
                                    </p>
                                    <p>
                                        In case of late payment, late payment penalties equal to three times the legal
                                        interest rate will be applied automatically.
                                    </p>
                                </div>
                            </div>

                            {/* Delivery */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    4. Delivery and Reception
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        Deliveries must be made on agreed dates and locations. Any delay must
                                        be immediately reported to the Company.
                                    </p>
                                    <p>
                                        Reception of goods is subject to verification of quantitative and qualitative
                                        conformity. Any apparent defect must be reported within 8 days.
                                    </p>
                                    <p>
                                        Goods travel at the Supplier's risk and peril until their reception
                                        by the Company.
                                    </p>
                                </div>
                            </div>

                            {/* Warranties */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    5. Warranties and Liability
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        The Supplier guarantees that its products or services comply with agreed
                                        specifications, are free from defects and comply with applicable regulations.
                                    </p>
                                    <p>
                                        The Supplier undertakes to maintain professional liability insurance
                                        covering damages that could result from the performance of its services.
                                    </p>
                                    <p>
                                        In case of non-conformity, the Supplier undertakes to take back or replace
                                        defective products free of charge as soon as possible.
                                    </p>
                                </div>
                            </div>

                            {/* Confidentiality */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    6. Confidentiality and Intellectual Property
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        The Supplier undertakes to maintain strictly confidential all information
                                        communicated by the Company in the context of their commercial relationship.
                                    </p>
                                    <p>
                                        Unless otherwise agreed, all intellectual property rights on creations
                                        made for the Company belong to the latter.
                                    </p>
                                </div>
                            </div>

                            {/* Termination */}
                            <div>
                                <h2 className="text-2xl font-display font-semibold text-gray-800 mb-4">
                                    7. Termination
                                </h2>
                                <div className="text-gray-600 font-sans space-y-4">
                                    <p>
                                        In case of serious breach by the Supplier of its obligations, the Company may
                                        immediately terminate the contract after formal notice remaining without effect for 8 days.
                                    </p>
                                    <p>
                                        Termination does not affect orders in progress, unless otherwise decided
                                        by the Company.
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
                                        For any questions regarding these supplier conditions:
                                    </p>
                                    <p><strong>Email:</strong> suppliers@eleya.ai</p>
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

export default SuppliersTermsPage; 