// src/theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#2563eb',
    secondary: '#f1f5f9',
    accent: '#f59e42',
    background: '#f8fafc',
    surface: '#fff',
    text: '#1e293b',
    muted: '#64748b',
    border: '#e2e8f0',
    success: '#22c55e',
    warning: '#fbbf24',
    danger: '#ef4444',
    badgeBg: '#e0e7ef',
    badgeText: '#2563eb',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  shadows: {
    sm: '0 1px 2px rgba(16,30,54,0.04)',
    md: '0 2px 8px rgba(16,30,54,0.08)',
  },
};

export default theme;
