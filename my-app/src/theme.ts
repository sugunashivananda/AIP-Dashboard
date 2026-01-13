// src/theme.ts
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#3f51b5',
    secondary: '#f50057',
    background: '#f4f6f8',
    surface: '#fff',
    text: '#222',
    textSecondary: '#666',
    border: '#e0e0e0',
    badgeSuccess: '#4caf50',
    badgeWarning: '#ff9800',
    badgeError: '#f44336',
    sidebarBg: '#212121',
    sidebarText: '#fff',
    sidebarActive: '#3949ab',
    focus: '#1976d2',
  },
  spacing: (factor: number) => `${factor * 8}px`,
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '32px',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

export default theme;
