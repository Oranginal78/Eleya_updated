/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Plus Jakarta Sans', 'Geist', 'system-ui', 'sans-serif'],
                'display': ['Plus Jakarta Sans', 'Geist', 'system-ui', 'sans-serif'],
                'mono': ['Fragment Mono', 'monospace'],
                'poppins': ['Poppins', 'sans-serif'],
                'instrument': ['Instrument Sans', 'sans-serif'],
                'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                // Couleurs exactes de l'inspiration Framer
                white: 'rgb(255, 255, 255)', // --token-e9b87438-ffd5-4fe0-8db2-85d90798dd9e
                primary: {
                    50: 'rgb(223, 227, 251)', // --token-144259d1-5114-4d4f-84b7-7906cb73b8ed
                    100: 'rgb(218, 232, 245)', // --token-b885bcf0-306a-4677-b99a-c05c4bfe6d75
                    200: 'rgb(206, 222, 239)', // --token-268d4a02-ae31-48cf-b7c4-d16d6ed86a22
                    300: 'rgb(130, 255, 254)', // --token-c9240c86-cd56-40fa-8d09-aeb83f6d8c3a
                    400: 'rgb(62, 146, 255)',  // --token-070c1ef9-134c-475b-b326-b2d04343dc02
                    500: 'rgb(91, 113, 235)',  // --token-b1cf33d9-b200-46ba-80cb-ef2d0f4a22b3 - couleur principale
                    600: 'rgb(33, 59, 198)',   // --token-11109f1c-f16d-4428-849e-fb85552f6b82
                },
                gray: {
                    25: 'rgb(250, 250, 250)',  // --token-ba85005e-8bb3-445f-a637-0f523e02b3ab
                    50: 'rgb(244, 246, 247)',  // --token-ec910391-703d-469b-addd-29ca33f4687f
                    100: 'rgb(229, 231, 235)', // --token-ca43ad2e-4839-410d-aa50-dea2a8614f15
                    200: 'rgb(209, 213, 219)', // --token-6289e824-c732-4330-b5a7-d092b92815c7
                    300: 'rgb(156, 163, 175)', // --token-d6b5e424-ebaa-4e15-9d49-bbd19174ce5f
                    400: 'rgb(107, 114, 128)', // --token-c2364785-8edf-4554-bf5f-fb11a35f5e74
                    500: 'rgb(75, 85, 99)',    // --token-4edb1f96-5b95-4d65-aa22-ab9b1c4daa6b
                    600: 'rgb(55, 65, 81)',    // --token-18d30e06-6ff4-4f87-b37d-990cd1242496
                    700: 'rgb(31, 41, 55)',    // --token-01a40add-b74d-4ec7-a962-774bd91feadc
                    800: 'rgb(17, 24, 39)',    // --token-37c8ed4f-2a53-472e-9a87-a130781c4a8e
                    900: 'rgb(0, 0, 0)',       // --token-8d95ff30-2d4b-4b3e-9273-909bdb190607
                },
                dark: 'rgb(39, 44, 48)', // --token-34df0dcc-a5f4-489f-9df8-34bafa4d28a3
                // Aliases pour faciliter l'utilisation
                blue: {
                    500: 'rgb(91, 113, 235)',  // couleur principale
                    600: 'rgb(33, 59, 198)',
                    400: 'rgb(62, 146, 255)',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
                'slide-down': 'slideDown 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'scroll-right': 'scroll-right 30s linear infinite',
                'scroll-left': 'scroll-left 30s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'scroll-right': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'scroll-left': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            backdropBlur: {
                xs: '2px',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
            },
        },
    },
    plugins: [],
} 