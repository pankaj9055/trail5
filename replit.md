# replit.md

## Overview

This is a full-stack React application with a Node.js/Express backend featuring a cyberpunk-themed developer portfolio. The application uses modern web technologies including React, TypeScript, Express, and Drizzle ORM with PostgreSQL for data persistence.

## System Architecture

The application follows a clean monorepo structure with separate client and server directories:

- **Frontend**: React with TypeScript, using Vite for build tooling
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: Radix UI components with Tailwind CSS
- **State Management**: React Query for server state management

## Key Components

### Frontend Architecture
- **React Router**: Uses Wouter for client-side routing
- **Component Library**: Shadcn/ui components built on Radix UI primitives
- **State Management**: React Context API for global portfolio data synchronization
- **Interactive Components**: 3D rotating cube with mouse/touch controls, flying words animations
- **Styling**: Tailwind CSS with custom cyberpunk theme (neon colors, animations)
- **Build System**: Vite with custom configuration for development and production

### Backend Architecture
- **Express Server**: RESTful API structure with middleware for logging and error handling
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **Development Tools**: Hot module replacement with Vite integration

### Database Schema
- **Users Table**: Basic user model with username and password fields
- **Migrations**: Drizzle migrations stored in `/migrations` directory
- **Type Safety**: Full TypeScript integration with Drizzle for compile-time safety

## Data Flow

1. **Client Requests**: React components make API calls using React Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Database Operations**: Storage interface abstracts database operations using Drizzle ORM
4. **Response**: Data flows back through the same path with proper error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL serverless driver
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **express**: Web framework for Node.js

### UI Dependencies
- **@radix-ui/***: Comprehensive component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Icon library

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with HMR
- **Database**: Requires PostgreSQL connection via DATABASE_URL environment variable
- **Build Process**: Separate client and server builds

### Production
- **Client Build**: Static files generated via Vite
- **Server Build**: ESBuild bundles server code
- **Database**: Uses Drizzle push for schema deployment
- **Environment**: Requires NODE_ENV=production and DATABASE_URL

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
- July 06, 2025. Enhanced portfolio with CODE-X branding, colorful neon effects, modern tech stack
- July 06, 2025. Fixed admin panel with functional authentication modal
- July 06, 2025. Added services section with Telegram contact integration
- July 07, 2025. Added interactive cube with mouse/touch controls and faster rotation
- July 07, 2025. Implemented global state management for admin-portfolio synchronization
- July 07, 2025. Fixed autofill issues in admin login and removed demo credentials display
- July 07, 2025. Updated portfolio content: "FULL STACK DEVELOPER", Telegram @Growwithstorm
- July 07, 2025. Added FlyingWords component with interactive skill animations
- July 07, 2025. Enhanced portfolio with Python/TypeScript expertise messaging
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```

## Technical Notes

- The application uses a cyberpunk aesthetic with custom CSS animations and neon color schemes
- Portfolio features interactive elements like rotating 3D cube, animated skill charts, and flying words
- Interactive cube supports both mouse drag and touch controls with auto-rotation when not interacting
- Global state management enables real-time synchronization between admin panel and portfolio
- FlyingWords component provides engaging click-to-animate skill demonstrations
- Database schema is minimal but extensible for future user authentication features
- Storage layer uses interface pattern for easy swapping between implementations
- All components are fully typed with TypeScript for better developer experience