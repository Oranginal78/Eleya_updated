# Blog Images

This folder contains illustration images for blog articles.

## Current structure:
```
blog/
├── data-analysis.svg     # Data analysis illustration
├── user-experience.svg   # User experience illustration
├── performance-optimization.svg # Performance optimization illustration
├── artificial-intelligence.svg # AI illustration
├── digital-marketing.svg # Digital marketing illustration
├── business-growth.svg   # Business growth illustration
└── README.md            # This file
```

## How to add a new image:

### Option 1: Add an SVG file
1. Place the image in this folder
2. Reference it in the BlogSection.jsx component:

```jsx
image: "/images/blog/new-image.svg",
// ... other properties
```

### Option 2: Use external images
If you prefer to use external images, simply replace the `illustrationComponent` property with `image` in the BlogSection component.

## Recommendations:
- **Format**: SVG (preferred) or PNG
- **Size**: Optimized for web (< 100KB)
- **Dimensions**: 400x300px or similar proportions
- **Style**: Consistent with the site's design 