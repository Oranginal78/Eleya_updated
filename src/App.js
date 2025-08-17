import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useParams } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PlatformPage from './components/pages/PlatformPage';
import EleyaTwinPage from './components/pages/EleyaTwinPage';
import FranceGPTPage from './components/pages/FranceGPTPage';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import DemoPage from './components/pages/DemoPage';
import MentionsLegalesPage from './components/pages/MentionsLegalesPage';
import SuppliersTermsPage from './components/pages/SuppliersTermsPage';
import TermsOfUsePage from './components/pages/TermsOfUsePage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import CookiesPage from './components/pages/CookiesPage';
// Blog article pages
import FutureAiPoweredAnalyticsPage from './components/pages/FutureAiPoweredAnalyticsPage';
import EssentialMetricsBusinessTrackPage from './components/pages/EssentialMetricsBusinessTrackPage';
import OptimizeWebsitePerformancePage from './components/pages/OptimizeWebsitePerformancePage';
import SyntheticDataReliabilityPage from './components/pages/SyntheticDataReliabilityPage';
// Solutions pages
import BrandsPage from './components/pages/solutions/BrandsPage';
import ResearchProvidersPage from './components/pages/solutions/ResearchProvidersPage';
import SegmentationUAPage from './components/pages/solutions/SegmentationUAPage';
import ClaimTestingPage from './components/pages/solutions/ClaimTestingPage';
import OpinionPage from './components/pages/solutions/OpinionPage';
import BrandPerceptionPage from './components/pages/solutions/BrandPerceptionPage';

// Blog router component to handle different blog articles
const BlogRouter = () => {
    const { slug } = useParams();

    switch (slug) {
        case 'future-ai-powered-analytics':
            return <FutureAiPoweredAnalyticsPage />;
        case 'essential-metrics-business-track':
            return <EssentialMetricsBusinessTrackPage />;
        case 'optimize-website-performance':
            return <OptimizeWebsitePerformancePage />;
        case 'synthetic-data-reliability':
            return <SyntheticDataReliabilityPage />;
        default:
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
                        <p className="text-gray-600 mb-6">The blog article you're looking for doesn't exist or has been moved.</p>
                        <Link to="/blog" className="bg-[#194471] text-white px-6 py-3 rounded-lg hover:bg-[#194471]/90 transition-colors">
                            Back to Blog
                        </Link>
                    </div>
                </div>
            );
    }
};

const FranceGPTExperiencePage = () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">FranceGPT Experience Coming Soon</h1>
            <p className="text-gray-600 mb-6">The interactive FranceGPT experience is under development and will be available soon.</p>
            <Link to="/francegpt" className="bg-[#194471] text-white px-6 py-3 rounded-lg hover:bg-[#194471]/90 transition-colors">
                Back to FranceGPT
            </Link>
        </div>
    </div>
);

// Component to scroll to top on each route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/platform" element={<PlatformPage />} />
                    <Route path="/eleyatwin" element={<EleyaTwinPage />} />
                    <Route path="/francegpt" element={<FranceGPTPage />} />
                    <Route path="/francegpt/experience" element={<FranceGPTExperiencePage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:slug" element={<BlogRouter />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
                    <Route path="/suppliers-terms" element={<SuppliersTermsPage />} />
                    <Route path="/terms-of-use" element={<TermsOfUsePage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                    <Route path="/cookies" element={<CookiesPage />} />

                    {/* Solutions routes */}
                    <Route path="/solutions/brands" element={<BrandsPage />} />
                    <Route path="/solutions/research-providers" element={<ResearchProvidersPage />} />
                    <Route path="/solutions/segmentation-ua" element={<SegmentationUAPage />} />
                    <Route path="/solutions/claim-testing" element={<ClaimTestingPage />} />
                    <Route path="/solutions/opinion" element={<OpinionPage />} />
                    <Route path="/solutions/brand-perception" element={<BrandPerceptionPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App; 