import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#2D5BFF',
    secondary: '#F5F8FF',
    background: '#F9FAFB',
    sidebarBg: '#1A2332',
    sidebarActive: '#2D5BFF',
    text: '#222B45',
    muted: '#8F9BB3',
    border: '#E4E9F2',
    badgeBg: '#E4E9F2',
    badgeText: '#222B45',
    danger: '#FF3D71',
    success: '#00E096',
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
