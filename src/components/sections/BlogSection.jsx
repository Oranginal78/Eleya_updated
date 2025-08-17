import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const BlogCard = ({ title, excerpt, date, readTime, image, delay = 0, slug }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const cardRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    // Précharger l'image
    useEffect(() => {
        if (image) {
            console.log('Tentative de chargement de l\'image:', image);
            const img = new Image();
            img.onload = () => {
                console.log('Image chargée avec succès:', image);
                setImageLoaded(true);
            };
            img.onerror = (error) => {
                console.error('Erreur de chargement de l\'image:', image, error);
                setImageError(true);
            };
            img.src = image;
        }
    }, [image]);

    return (
        <Link
            to={`/blog/${slug}`}
            className="block"
        >
            <article
                ref={cardRef}
                className={`group relative rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                style={{ aspectRatio: '3/4' }}
            >
                {/* Image de fond */}
                <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                    style={{
                        backgroundImage: (image && imageLoaded && !imageError) ? `url(${image})` : 'none',
                        backgroundColor: '#f3f4f6'
                    }}
                >
                    {/* Fallback icon si pas d'image ou erreur */}
                    {(!image || !imageLoaded || imageError) && (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                                <CalendarIcon className="w-8 h-8 text-primary-500" />
                            </div>
                        </div>
                    )}
                </div>

                {/* Overlay et contenu */}
                <div className="relative h-full flex flex-col justify-end">
                    {/* Overlay blanc semi-transparent */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent"></div>

                    {/* Contenu textuel */}
                    <div className="relative p-6 space-y-3">
                        <div className="flex items-center gap-4 text-sm text-gray-500 font-sans">
                            <span className="flex items-center gap-1">
                                <CalendarIcon className="w-4 h-4" />
                                {date}
                            </span>
                            <span>{readTime} min read</span>
                        </div>

                        <h3 className="text-xl font-display font-semibold text-gray-900 group-hover:text-[#194471] transition-colors duration-200">
                            {title}
                        </h3>

                        <p className="text-gray-600 line-clamp-3 font-sans">
                            {excerpt}
                        </p>

                        <div className="flex items-center gap-2 text-[#194471] font-medium hover:gap-3 transition-all duration-200 font-display">
                            Read more
                            <ArrowRightIcon className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

const BlogSection = () => {
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const blogPosts = [
        {
            title: "The Future of AI-Powered Analytics",
            excerpt: "Discover how artificial intelligence is revolutionizing the way businesses analyze data and make decisions. Learn about the latest trends and technologies shaping the analytics landscape.",
            date: "Dec 15, 2024",
            readTime: 5,
            image: "/images/ai-analytics.jpg",
            slug: "future-ai-powered-analytics"
        },
        {
            title: "10 Essential Metrics Every Business Should Track",
            excerpt: "From conversion rates to customer lifetime value, explore the key performance indicators that can drive your business growth and help you make informed decisions.",
            date: "Dec 12, 2024",
            readTime: 7,
            image: "/images/metrics.jpg",
            slug: "essential-metrics-business-track"
        },
        {
            title: "Understanding Synthetic Data Reliability: A Complete Guide",
            excerpt: "Discover how much data you need to produce reliable synthetic data, explore our model performance achievements, and understand the key terminology in the synthetic data landscape.",
            date: "Dec 8, 2024",
            readTime: 8,
            image: "/images/illustr2.jpg",
            slug: "synthetic-data-reliability"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                >
                    <p className="text-primary-500 text-sm font-medium uppercase tracking-wide mb-4 font-sans">
                        Latest Insights
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-gray-800 mb-6">
                        Stay ahead with our blog
                    </h2>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto font-sans">
                        Get the latest insights, tips, and best practices for analytics,
                        performance optimization, and business growth.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {blogPosts.map((post, index) => (
                        <BlogCard
                            key={index}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            readTime={post.readTime}
                            image={post.image}
                            slug={post.slug}
                            delay={index * 200}
                        />
                    ))}
                </div>

                {/* CTA */}
                <div className={`text-center transition-all duration-1000 delay-600 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 bg-[#194471] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#194471]/90 transition-colors duration-200 font-display"
                    >
                        View all articles
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogSection; 