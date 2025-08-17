import React from 'react';
import BasePage from './BasePage';
import BlogSection from '../sections/BlogSection';

const BlogPage = () => {
    return (
        <BasePage variant="blog">
            <BlogSection />
        </BasePage>
    );
};

export default BlogPage; 