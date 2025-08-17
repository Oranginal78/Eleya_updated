import React from 'react';
import BasePage from './pages/BasePage';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import VisionSection from './sections/VisionSection';
import PartnersSection from './sections/PartnersSection';
import StudyResultsSection from './sections/StudyResultsSection';
import ScrollingQuestionsSection from './sections/ScrollingQuestionsSection';

const LandingPage = () => {
    return (
        <BasePage>
            <HeroSection />
            <FeaturesSection />
            <VisionSection />
            <StudyResultsSection />
            <PartnersSection />
            <ScrollingQuestionsSection />
        </BasePage>
    );
};

export default LandingPage; 