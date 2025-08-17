import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const SyntheticDataReliabilityPage = () => {
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
                                Dec 8, 2024
                            </span>
                            <span className="flex items-center gap-1">
                                <ClockIcon className="w-4 h-4" />
                                8 min read
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-display font-semibold text-gray-900 mb-6">
                            Understanding Synthetic Data Reliability: A Complete Guide
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Discover how much data you need to produce reliable synthetic data, explore our model performance achievements, and understand the key terminology in the synthetic data landscape.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl">
                    <img
                        src="/images/Ressources Blog Image.jpg"
                        alt="Synthetic Data Reliability Hero"
                        className="w-full h-72 lg:h-96 object-cover rounded-xl shadow-lg mb-8"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-[#194471] mb-4">How Many Datapoints for Reliable Synthetic Data?</h2>
                        <div className="bg-blue-50 border-l-4 border-blue-300 p-4 rounded-xl mb-6">
                            <p className="mb-2 font-semibold">A common question at Eleya:</p>
                            <p>How much data should we have in input to produce reliable synthetic data? Here are a few key elements to answer this question.</p>
                        </div>
                        <p>
                            Usually, we observe that the accuracy of our model predictions reaches a good level between <b>20 and 30 input datapoints</b>. The more information we have about a respondent, the more precise its digital twin becomes, answering accurately to a larger range of questions.
                        </p>
                        <h3 className="text-xl font-semibold mt-8 mb-2">Accuracy Per Datapoints in Input</h3>
                        <img
                            src="/images/image (8)1.jpg"
                            alt="Accuracy per datapoints"
                            className="w-full rounded-xl shadow mb-4"
                        />
                        <p>
                            Our research shows a clear correlation between the number of input datapoints and the accuracy of synthetic data generation. The graph above demonstrates how accuracy improves as we increase the amount of input data, with significant improvements visible between 5 and 40 datapoints.
                        </p>
                        <div className="bg-orange-50 border-l-4 border-orange-300 p-4 rounded-xl my-6">
                            <b>Tip:</b> To help customers assess whether their questions are within the answering capabilities of our digital twins, we've developed a relevance score. That way, we flag their limitations to always deliver highly reliable synthetic data.
                        </div>
                        <h3 className="text-xl font-semibold mt-8 mb-2">Understanding Data Spread and Reliability</h3>
                        <p>
                            The spread analysis reveals important insights about data reliability. As we increase the number of questions from 5 to 40, we observe not only improved accuracy but also more consistent results across different scenarios. This consistency is crucial for reliable synthetic data generation.
                        </p>
                        <h2 className="text-2xl font-bold text-[#194471] mt-10 mb-4">Evaluating Our Model Performance</h2>
                        <div className="bg-green-50 border-l-4 border-green-300 p-4 rounded-xl mb-6">
                            <p className="mb-2 font-semibold">How did we achieve a 92% similarity between an AI panel and a traditional panel?</p>
                            <ul className="list-disc pl-6">
                                <li>We used more than 15 socio-demographic and about 100 opinion datapoints to build the AI Agents profiles</li>
                                <li>Automated prompt engineering to rewrite prompts that led to an incorrect answer during the training stage</li>
                                <li>An adapted use-case with most questions demanding a clear position from the respondent rather than highly mitigated answers</li>
                            </ul>
                        </div>
                        <img
                            src="/images/image (8)2.jpg"
                            alt="AI Panel vs Traditional Panel Comparison"
                            className="w-full rounded-xl shadow mb-4"
                        />
                        <p>
                            The results speak for themselves: achieving 92% similarity demonstrates that synthetic data can be a reliable alternative to traditional panels when properly implemented.
                        </p>
                        <h2 className="text-2xl font-bold text-[#194471] mt-10 mb-4">Synthetic Data Glossary</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>Synthetic Data</b>
                                <p>Data created using extrapolation models rather than collected from the real world. The latest technological developments such as LLMs pave the way for much more powerful applications.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>Digital Twins</b>
                                <p>Copies of individuals that replicate their behaviors, preferences, and opinions, using real data about each twinned person as input. LLMs are usually used to give life to those digital twins.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>Fully Synthetic Respondents</b>
                                <p>Respondents created from scratch using LLMs, without other data in input than the one that has been used in the training phase of the LLM.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>Persona Bot</b>
                                <p>Custom chatbot powered by an LLM that is designed to represent a target segment using aggregated data, thus giving life to a segmentation study.</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-xl border">
                                <b>Sample Boosting</b>
                                <p>Increase in the size of a sample using a machine-learning model that replicates existing patterns to create new respondents.</p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-bold text-[#194471] mt-10 mb-4">Practical Applications and Benefits</h2>
                        <ul className="list-disc pl-6 mb-6">
                            <li>Target specific populations that are hard to reach</li>
                            <li>Conduct massive testing without panel fatigue</li>
                            <li>Ensure consistent data quality across different time periods</li>
                            <li>Overcome privacy concerns that limit access to real respondent data</li>
                        </ul>
                        <div className="bg-blue-50 border-l-4 border-blue-300 p-4 rounded-xl mb-6">
                            <b>Quality Assurance:</b> Our relevance scoring system ensures that synthetic data meets quality standards by flagging questions that may be outside the digital twin's capabilities, providing confidence scores for each response, and continuously learning from new data to improve accuracy.
                        </div>
                        <h2 className="text-2xl font-bold text-[#194471] mt-10 mb-4">The Future of Synthetic Data</h2>
                        <p>
                            As LLM technology continues to advance, we expect synthetic data to become even more sophisticated and reliable. The key is maintaining a balance between innovation and rigorous validation to ensure that synthetic data serves as a valuable complement to traditional research methods.
                        </p>
                        <p>
                            If you're conducting research and need to target specific populations or conduct massive testing without panel fatigue, we'd love to talk about how synthetic data can enhance your research capabilities.
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

export default SyntheticDataReliabilityPage; 