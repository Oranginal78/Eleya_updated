import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const ScrollingQuestionsSection = () => {
    // Combine all questions into one array for mobile navigation
    const allQuestions = [
        "How often do you use meal kit delivery services?",
        "How appealing is this claim?",
        "When you think of luxury skincare brands, which names come to mind first?",
        "Which brands of electric toothbrushes have you used in the past 3 months?",
        "How likely are you to repurchase Dyson vacuum cleaners?",
        "Which claim conveys the most innovative message?",
        "How unique is this statement?",
        "On a 0-10 scale, how likely are you to recommend Spotify Premium to a friend?",
        "If available today at $299, how likely would you be to buy...?",
        "What is your biggest frustration with mobile banking apps?",
        "How satisfied are you with your Amazon Prime membership?",
        "Which of these sports drink brands are you aware of?",
        "What are the top 3 factors you consider when choosing a project management software?",
        "How well does innovative describe Tesla electric vehicles?",
        "How would you describe this product concept...?",
        "Compared to Samsung, how would you rate Apple smartphones on battery life?",
        "Where am I losing potential leads in my funnel?",
        "If Nike were a person, which personality traits would best describe them?",
        "How believable is this statement...?",
        "What is the primary reason for your Netflix recommendation score?",
        "What concerns you about a ring that monitors blood pressure?",
        "Rank all claims from the most to the less convincing",
        "Which one brand of athletic sneakers do you use most often?"
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const questions = {
        row1: [
            "How often do you use meal kit delivery services?",
            "How appealing is this claim?",
            "When you think of luxury skincare brands, which names come to mind first?",
            "Which brands of electric toothbrushes have you used in the past 3 months?",
            "How likely are you to repurchase Dyson vacuum cleaners?",
            "Which claim conveys the most innovative message?",
            "How unique is this statement?",
            "On a 0-10 scale, how likely are you to recommend Spotify Premium to a friend?"
        ],
        row2: [
            "If available today at $299, how likely would you be to buy...?",
            "What is your biggest frustration with mobile banking apps?",
            "How satisfied are you with your Amazon Prime membership?",
            "How appealing is this claim?",
            "Which of these sports drink brands are you aware of?",
            "What are the top 3 factors you consider when choosing a project management software?",
            "How well does innovative describe Tesla electric vehicles?",
            "How would you describe this product concept...?"
        ],
        row3: [
            "Compared to Samsung, how would you rate Apple smartphones on battery life?",
            "Where am I losing potential leads in my funnel?",
            "If Nike were a person, which personality traits would best describe them?",
            "How believable is this statement...?",
            "What is the primary reason for your Netflix recommendation score?",
            "What concerns you about a ring that monitors blood pressure?",
            "Rank all claims from the most to the less convincing",
            "Which one brand of athletic sneakers do you use most often?"
        ]
    };

    const nextQuestion = () => {
        setCurrentQuestionIndex((prev) => (prev + 1) % allQuestions.length);
    };

    const prevQuestion = () => {
        setCurrentQuestionIndex((prev) => (prev - 1 + allQuestions.length) % allQuestions.length);
    };

    return (
        <section className="py-16 overflow-hidden" style={{
            backgroundColor: '#FFFBF7'
        }}>
            {/* Desktop Version - Keep original scrolling animation */}
            <div className="hidden md:block space-y-6">
                {/* Row 1 - Scrolls from left to right */}
                <div className="relative">
                    <div className="flex animate-scroll-right">
                        {[...questions.row1, ...questions.row1].map((question, index) => (
                            <div key={index} className="flex-shrink-0 mx-3">
                                <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-max">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="text-gray-800 font-medium whitespace-nowrap">{question}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2 - Scrolls from right to left */}
                <div className="relative">
                    <div className="flex animate-scroll-left">
                        {[...questions.row2, ...questions.row2].map((question, index) => (
                            <div key={index} className="flex-shrink-0 mx-3">
                                <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-max">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="text-gray-800 font-medium whitespace-nowrap">{question}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3 - Scrolls from left to right */}
                <div className="relative">
                    <div className="flex animate-scroll-right-slow">
                        {[...questions.row3, ...questions.row3].map((question, index) => (
                            <div key={index} className="flex-shrink-0 mx-3">
                                <div className="bg-white border border-gray-200 rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow duration-200 min-w-max">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        </div>
                                        <p className="text-gray-800 font-medium whitespace-nowrap">{question}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Version - Single question with arrows */}
            <div className="block md:hidden px-4">
                <div className="relative flex items-center justify-center">
                    {/* Left Arrow */}
                    <button
                        onClick={prevQuestion}
                        className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Question précédente"
                    >
                        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                    </button>

                    {/* Question Card */}
                    <div className="mx-12 w-full max-w-sm">
                        <div className="bg-white border border-gray-200 rounded-lg px-6 py-6 shadow-sm">
                            <p className="text-gray-800 font-medium leading-relaxed text-sm text-center">
                                {allQuestions[currentQuestionIndex]}
                            </p>
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextQuestion}
                        className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Question suivante"
                    >
                        <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex items-center justify-center mt-6 space-x-2">
                    {allQuestions.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentQuestionIndex(index)}
                            className={`w-2 h-2 rounded-full transition-colors duration-200 ${index === currentQuestionIndex
                                ? 'bg-blue-500'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Aller à la question ${index + 1}`}
                        />
                    ))}
                </div>


            </div>
        </section>
    );
};

export default ScrollingQuestionsSection; 