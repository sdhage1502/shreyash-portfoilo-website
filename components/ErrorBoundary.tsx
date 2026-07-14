'use client';

import React, { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * Global Error Boundary — catches any uncaught client-side rendering error
 * and prevents the entire page from showing the Next.js white error screen.
 *
 * Specifically protects against:
 * - Blocked third-party scripts (Clarity, Lenis, DevIcons)
 * - Hydration mismatches across timezones
 * - Undefined property access on data arrays
 * - WebGL context failures
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log to console in development; in production you could send to a
    // logging service like Sentry or LogRocket here.
    if (process.env.NODE_ENV === 'development') {
      console.error('[ErrorBoundary] Caught client-side error:', error, errorInfo);
    }
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // If a custom fallback was provided, use it
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default: minimal, styled fallback that matches the site's dark theme
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#080808',
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'system-ui, sans-serif',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 800,
              color: '#fff',
              marginBottom: '1rem',
              letterSpacing: '-0.03em',
            }}
          >
            Something went wrong
          </h2>
          <p style={{ maxWidth: '420px', lineHeight: 1.6, marginBottom: '2rem' }}>
            A client-side error occurred. This may be caused by a browser extension
            blocking scripts. Try disabling your ad blocker and refreshing.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              if (typeof window !== 'undefined') {
                window.location.reload();
              }
            }}
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: '#C8FF00',
              color: '#080808',
              border: 'none',
              borderRadius: '9999px',
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: 'pointer',
              letterSpacing: '0.02em',
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
