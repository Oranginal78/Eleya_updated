import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const BasePage = ({ children, className = "", variant = "default" }) => {
    const getBackgroundStyle = () => {
        if (variant === 'blog') {
            return {
                background: '#ffffff',
                minHeight: '100vh'
            };
        }
        return {
            background: 'linear-gradient(135deg, #FEC393 0%, #FED7A8 20%, #FFEABF 40%, #FFF5D6 60%, #FFFBEB 80%, #FFFEF7 100%)',
            minHeight: '100vh'
        };
    };

    return (
        <div className={`min-h-screen ${className}`} style={getBackgroundStyle()}>
            <Navbar variant={variant === 'blog' ? 'blog' : 'default'} />
            <main className="pt-16">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default BasePage; 