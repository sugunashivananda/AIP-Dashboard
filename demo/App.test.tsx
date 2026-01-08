// demo/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';

describe('App', () => {
  test('renders main heading', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  test('renders navigation', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  test('renders button with accessible name', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    );
    expect(screen.getByRole('button', { name: /primary action/i })).toBeInTheDocument();
  });
});

// src/theme.ts
export const theme = {
  colors: {
    primary: '#1976d2',
    secondary: '#424242',
    background: '#f5f5f5',
    surface: '#fff',
    text: '#212121',
    accent: '#ff4081',
    border: '#e0e0e0',
    focus: '#2962ff',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontSize: '16px',
    fontWeightBold: 700,
    fontWeightNormal: 400,
    heading1: '2rem',
    heading2: '1.5rem',
    heading3: '1.25rem',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
};

// src/App.tsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const AppContainer = styled.main`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.text};
`;

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading2};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  margin: 0;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li``;

const NavAnchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.typography.fontWeightNormal};
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

const HeaderSection = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.xl} 0;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const MainHeading = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading1};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SubHeading = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading3};
  font-weight: ${({ theme }) => theme.typography.fontWeightNormal};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Section = styled.section`
  max-width: 800px;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: ${({ theme }) => theme.spacing.xl};
`;

const PrimaryButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  background: ${({ theme, $variant }) =>
    $variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Nav aria-label="Main navigation">
        <Logo>AIP Dashboard</Logo>
        <NavLinks>
          <NavLink>
            <NavAnchor href="#home">Home</NavAnchor>
          </NavLink>
          <NavLink>
            <NavAnchor href="#features">Features</NavAnchor>
          </NavLink>
          <NavLink>
            <NavAnchor href="#pricing">Pricing</NavAnchor>
          </NavLink>
          <NavLink>
            <NavAnchor href="#about">About</NavAnchor>
          </NavLink>
        </NavLinks>
      </Nav>
      <HeaderSection>
        <MainHeading>AIP Dashboard</MainHeading>
        <SubHeading>Analytics & Insights Platform for Your Business</SubHeading>
        <PrimaryButton $variant="primary" aria-label="Primary Action">Primary Action</PrimaryButton>
      </HeaderSection>
      <Section aria-labelledby="features-heading">
        <h2 id="features-heading" style={{ fontSize: theme.typography.heading2, marginBottom: theme.spacing.md }}>Key Features</h2>
        <ul>
          <li>Real-time analytics dashboard</li>
          <li>Customizable reports</li>
          <li>Team collaboration tools</li>
          <li>Secure cloud storage</li>
        </ul>
      </Section>
    </AppContainer>
  </ThemeProvider>
);

export default App;
