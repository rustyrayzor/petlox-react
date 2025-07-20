# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production (outputs to build/ directory)
npm run build

# Run tests in interactive watch mode
npm test

# Run a single test file
npm test -- path/to/test.js
```

## Architecture Overview

This is a **Petlox React Template** - a pet care and veterinary services website with e-commerce functionality built with React 18 and Create React App.

### Core Technologies
- **React 18.0.0** with functional components and hooks
- **React Router v6** for client-side routing
- **Redux + Redux Persist** for state management with localStorage persistence
- **Bootstrap 5.1.3** and **Material-UI** for UI components
- **SASS** for styling with organized architecture

### Project Structure

```
src/
├── api/              # API services and mock data (Services.js, blogs.js, data.json)
├── components/       # Reusable UI components (Navbar, Footer, Hero, etc.)
├── main-component/   # Page-level components (HomePage, ShopPage, etc.)
├── store/           # Redux store configuration and reducers
├── sass/            # SASS architecture with modular organization
└── utils/           # Utility functions
```

### Routing Pattern

Routes are defined in `src/main-component/router/index.js`:
- Dynamic routes use slugs: `/shop-single/:slug`, `/service-single/:slug`, `/blog-single/:slug`
- E-commerce flow: `/shop` → `/shop-single/:slug` → `/cart` → `/checkout` → `/order_received`
- Two homepage variations: `/` (or `/home`) and `/home-2`

### State Management

Redux store (`src/store/index.js`) with following reducers:
- **cart** - Shopping cart operations
- **wishList** - Product wishlist
- **compare** - Product comparison
- **products** - Product data management

Uses Redux Thunk for async actions and Redux DevTools for debugging.

### Styling Architecture

SASS files organized in `src/sass/`:
```
sass/
├── base/        # Base styles and resets
├── components/  # Component-specific styles
├── helpers/     # Variables, mixins, functions
├── layout/      # Header, footer, hero styles  
└── page/        # Page-specific styles
```

Import order in main stylesheet (`src/sass/style.scss`):
1. Helpers (variables, mixins)
2. Base styles
3. Layout components
4. UI components
5. Page-specific styles

### Key UI Libraries
- **react-slick** - Image carousels
- **react-modal-video** - Video modals
- **react-toastify** - Toast notifications
- **react-scroll-parallax** - Parallax effects
- **react-countup** - Number animations
- **yet-another-react-lightbox** - Image lightbox

### Data Flow
1. Mock API data stored in `src/api/` directory
2. Redux actions fetch data from these mock APIs
3. Components connect to Redux store using `react-redux`
4. Redux Persist maintains state across page refreshes

### Component Patterns
- Page components in `main-component/` handle routing and layout
- Reusable components in `components/` for UI elements
- Each component typically has its own directory with index.js and style files
- Props are passed down from page components to child components

### Build Configuration
- Uses Create React App without ejecting
- Configured homepage: "http://petlox-react.wpolive.com"
- ESLint configuration extends react-app defaults
- Production build optimized with code splitting