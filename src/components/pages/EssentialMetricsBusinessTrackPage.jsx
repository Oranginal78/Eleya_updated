import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const EssentialMetricsBusinessTrackPage = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-[#194471] hover:text-[#194471]/80 transition-colors duration-200 mb-8"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1">
                                <CalendarIcon className="w-4 h-4" />
                                Dec 12, 2024
                            </span>
                            <span className="flex items-center gap-1">
                                <ClockIcon className="w-4 h-4" />
                                7 min read
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-display font-semibold text-gray-900 mb-6">
                            10 Essential Metrics Every Business Should Track
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            From conversion rates to customer lifetime value, explore the key performance indicators that can drive your business growth and help you make informed decisions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl">
                    <img
                        src="/images/metrics.jpg"
                        alt="Business Metrics Dashboard"
                        className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-lg mb-8"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-[#194471] mb-4">Why Metrics Matter</h2>
                        <div className="bg-blue-50 border-l-4 border-blue-300 p-4 rounded-xl mb-6">
                            <p className="mb-2 font-semibold">In today's data-driven business environment, tracking the right metrics is crucial for success.</p>
                            <p>Metrics provide insights into your business performance, help identify areas for improvement, and guide strategic decision-making.</p>
                        </div>
                        <h2 className="text-2xl font-bold text-[#194471] mt-10 mb-4">The 10 Essential Business Metrics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>1. Customer Acquisition Cost (CAC)</b>
                                <p>How much it costs to acquire a new customer. Includes all marketing and sales expenses divided by the number of new customers acquired in a specific period.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>2. Customer Lifetime Value (CLV)</b>
                                <p>Total revenue a customer will generate throughout their relationship with your business.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>3. Monthly Recurring Revenue (MRR)</b>
                                <p>Shows predictable revenue generated each month for subscription-based businesses.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>4. Conversion Rate</b>
                                <p>Percentage of visitors who complete a desired action, such as making a purchase or signing up for a newsletter.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>5. Customer Churn Rate</b>
                                <p>Percentage of customers who stop using your product or service during a specific period.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>6. Net Promoter Score (NPS)</b>
                                <p>Measures customer satisfaction and loyalty by asking how likely they are to recommend your business to others.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>7. Gross Profit Margin</b>
                                <p>Shows the percentage of revenue that remains after deducting the cost of goods sold.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>8. Website Traffic and Engagement</b>
                                <p>Tracking website traffic, bounce rate, time on site, and page views provides insights into your online presence effectiveness.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>9. Sales Growth Rate</b>
                                <p>Measures the increase in sales revenue over a specific period.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>10. Cash Flow</b>
                                <p>Tracks the money coming in and going out of your business. Positive cash flow ensures sustainability and flexibility to invest in growth opportunities.</p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-[#194471] mt-10 mb-4">How to Track These Metrics Effectively</h2>
                        <div className="bg-green-50 border-l-4 border-green-300 p-4 rounded-xl mb-6">
                            <ul className="list-disc pl-6">
                                <li><b>Choose the Right Tools:</b> Invest in analytics tools that can automatically track and report on these metrics.</li>
                                <li><b>Set Up Regular Reporting:</b> Establish a regular reporting schedule to review these metrics.</li>
                                <li><b>Create Benchmarks and Goals:</b> Set realistic benchmarks based on industry standards and your historical performance.</li>
                            </ul>
                        </div>
                        <h2 className="text-2xl font-bold text-[#194471] mt-10 mb-4">Taking Action on Your Metrics</h2>
                        <div className="bg-orange-50 border-l-4 border-orange-300 p-4 rounded-xl mb-6">
                            <b>Tracking metrics is only valuable if you act on the insights they provide.</b> Regularly analyze your data to identify patterns, opportunities, and areas for improvement. Use these insights to make data-driven decisions that drive business growth and success.
                        </div>
                        <p>
                            Remember, the key is not just to track these metrics but to understand what they mean for your specific business context and use them to guide your strategic decisions.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 p-8 bg-gray-50 rounded-xl text-center">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 bg-[#194471] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#194471]/90 transition-colors duration-200"
                        >
                            <ArrowLeftIcon className="w-5 h-5" />
                            Back to all blog articles
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EssentialMetricsBusinessTrackPage; 