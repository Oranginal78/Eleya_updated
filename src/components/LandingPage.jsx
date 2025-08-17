import React from 'react';
import BasePage from './pages/BasePage';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import UseCasesSection from './sections/ProblemSection';
import StudyResultsSection from './sections/StudyResultsSection';
import ScrollingQuestionsSection from './sections/ScrollingQuestionsSection';
import BlogSection from './sections/BlogSection';

const LandingPage = () => {
    return (
        <BasePage>
            <HeroSection />
            <FeaturesSection />
            <UseCasesSection />
            <StudyResultsSection />
            <ScrollingQuestionsSection />
            <BlogSection />
        </BasePage>
    );
};

export default LandingPage; 