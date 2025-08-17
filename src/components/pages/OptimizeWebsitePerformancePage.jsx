import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const OptimizeWebsitePerformancePage = () => {
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
                                Dec 10, 2024
                            </span>
                            <span className="flex items-center gap-1">
                                <ClockIcon className="w-4 h-4" />
                                6 min read
                            </span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-display font-semibold text-gray-900 mb-6">
                            How to Optimize Your Website Performance
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Learn practical strategies to improve your website's speed, user experience, and search engine rankings. Get actionable tips from industry experts.
                        </p>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-4xl">
                    <img
                        src="/images/performance.jpg"
                        alt="Website Performance Optimization"
                        className="w-full h-64 lg:h-96 object-cover rounded-xl shadow-lg"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="max-w-4xl">
                    <div className="prose prose-lg prose-blue max-w-none">
                        <h2>Why Website Performance Matters</h2>
                        <p>
                            Website performance is crucial for user experience, search engine rankings, and business success.
                            Studies show that even a one-second delay in page load time can result in a 7% reduction in
                            conversions. In today's fast-paced digital world, users expect websites to load quickly and
                            function smoothly across all devices.
                        </p>

                        <h2>Key Performance Metrics to Monitor</h2>

                        <h3>Core Web Vitals</h3>
                        <p>
                            Google's Core Web Vitals are essential metrics that measure real-world user experience:
                        </p>
                        <ul>
                            <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance (should be under 2.5 seconds)</li>
                            <li><strong>First Input Delay (FID):</strong> Measures interactivity (should be under 100 milliseconds)</li>
                            <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability (should be under 0.1)</li>
                        </ul>

                        <h3>Additional Important Metrics</h3>
                        <ul>
                            <li><strong>Time to First Byte (TTFB):</strong> Server response time</li>
                            <li><strong>First Contentful Paint (FCP):</strong> When first content appears</li>
                            <li><strong>Speed Index:</strong> How quickly content is visually displayed</li>
                        </ul>

                        <h2>Optimization Strategies</h2>

                        <h3>1. Optimize Images</h3>
                        <p>
                            Images often account for the majority of a webpage's size. Here's how to optimize them:
                        </p>
                        <ul>
                            <li>Use modern image formats like WebP or AVIF</li>
                            <li>Implement responsive images with srcset attributes</li>
                            <li>Compress images without losing quality</li>
                            <li>Use lazy loading for images below the fold</li>
                            <li>Optimize image dimensions for different screen sizes</li>
                        </ul>

                        <h3>2. Minimize HTTP Requests</h3>
                        <p>
                            Reduce the number of requests your website makes:
                        </p>
                        <ul>
                            <li>Combine CSS and JavaScript files</li>
                            <li>Use CSS sprites for small images</li>
                            <li>Inline critical CSS</li>
                            <li>Remove unnecessary plugins and scripts</li>
                        </ul>

                        <h3>3. Enable Compression</h3>
                        <p>
                            Compress your files to reduce their size:
                        </p>
                        <ul>
                            <li>Enable Gzip or Brotli compression on your server</li>
                            <li>Minify CSS, JavaScript, and HTML files</li>
                            <li>Remove unnecessary whitespace and comments</li>
                        </ul>

                        <h3>4. Leverage Browser Caching</h3>
                        <p>
                            Set up proper caching headers to store static resources:
                        </p>
                        <ul>
                            <li>Set long expiration times for static assets</li>
                            <li>Use versioning for cache busting when files change</li>
                            <li>Implement service workers for advanced caching strategies</li>
                        </ul>

                        <h3>5. Optimize Server Response Time</h3>
                        <p>
                            Improve your server's performance:
                        </p>
                        <ul>
                            <li>Choose a reliable hosting provider</li>
                            <li>Use a Content Delivery Network (CDN)</li>
                            <li>Optimize database queries</li>
                            <li>Implement server-side caching</li>
                            <li>Use HTTP/2 for improved multiplexing</li>
                        </ul>

                        <h2>Advanced Optimization Techniques</h2>

                        <h3>Critical Rendering Path Optimization</h3>
                        <p>
                            Optimize the critical rendering path to improve perceived performance:
                        </p>
                        <ul>
                            <li>Inline critical CSS in the HTML head</li>
                            <li>Defer non-critical CSS loading</li>
                            <li>Minimize render-blocking JavaScript</li>
                            <li>Use async or defer attributes for scripts</li>
                        </ul>

                        <h3>Progressive Web App (PWA) Features</h3>
                        <p>
                            Implement PWA features for better performance:
                        </p>
                        <ul>
                            <li>Service workers for offline functionality</li>
                            <li>App shell architecture</li>
                            <li>Push notifications</li>
                            <li>Add to home screen capability</li>
                        </ul>

                        <h2>Mobile Optimization</h2>
                        <p>
                            With mobile traffic accounting for over 50% of web traffic, mobile optimization is crucial:
                        </p>
                        <ul>
                            <li>Use responsive design principles</li>
                            <li>Optimize touch targets for mobile devices</li>
                            <li>Minimize redirects</li>
                            <li>Optimize for slower mobile connections</li>
                            <li>Test on real devices, not just emulators</li>
                        </ul>

                        <h2>Performance Testing Tools</h2>

                        <h3>Free Tools</h3>
                        <ul>
                            <li><strong>Google PageSpeed Insights:</strong> Comprehensive performance analysis</li>
                            <li><strong>GTmetrix:</strong> Detailed performance reports</li>
                            <li><strong>WebPageTest:</strong> Advanced testing with multiple locations</li>
                            <li><strong>Lighthouse:</strong> Built into Chrome DevTools</li>
                        </ul>

                        <h3>Monitoring and Analytics</h3>
                        <ul>
                            <li>Set up Real User Monitoring (RUM)</li>
                            <li>Use Google Analytics for Core Web Vitals</li>
                            <li>Implement performance budgets</li>
                            <li>Set up alerts for performance regressions</li>
                        </ul>

                        <h2>Best Practices for Ongoing Optimization</h2>
                        <p>
                            Website performance optimization is an ongoing process:
                        </p>
                        <ul>
                            <li>Regularly audit your website performance</li>
                            <li>Monitor performance after each update</li>
                            <li>Stay updated with web performance best practices</li>
                            <li>Consider performance impact when adding new features</li>
                            <li>Educate your team about performance optimization</li>
                        </ul>

                        <h2>Conclusion</h2>
                        <p>
                            Optimizing website performance is essential for providing a great user experience and
                            achieving business goals. By implementing these strategies and continuously monitoring
                            your site's performance, you can ensure your website loads quickly, ranks well in
                            search engines, and converts visitors into customers.
                        </p>

                        <p>
                            Remember, performance optimization is not a one-time task but an ongoing commitment
                            to providing the best possible experience for your users.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-12 p-8 bg-gray-50 rounded-xl">
                        <h3 className="text-2xl font-display font-semibold text-gray-900 mb-4">
                            Want to Monitor Your Website Performance?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            EleyaTwin offers comprehensive website performance monitoring and analytics to help you optimize your site's speed and user experience.
                        </p>
                        <Link
                            to="/demo"
                            className="inline-flex items-center gap-2 bg-[#194471] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#194471]/90 transition-colors duration-200"
                        >
                            Start Monitoring Today
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptimizeWebsitePerformancePage; 