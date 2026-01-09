// demo/App.tsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Theme definition (colors, spacing, typography)
const theme = {
  colors: {
    primary: '#2563eb',
    secondary: '#64748b',
    background: '#f8fafc',
    surface: '#ffffff',
    accent: '#22c55e',
    border: '#e2e8f0',
    text: '#0f172a',
    muted: '#94a3b8',
    focus: '#2563eb',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  typography: {
    h1: '2rem',
    h2: '1.5rem',
    h3: '1.25rem',
    body: '1rem',
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeightBold: 700,
    fontWeightNormal: 400,
  },
  radii: {
    sm: '6px',
    md: '12px',
  },
};

// Styled Components
const AppContainer = styled.main`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  color: ${({ theme }) => theme.colors.text};
`;

const Header = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.h1};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled.a<{ $active?: boolean }>`
  color: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.secondary};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme, $active }) => $active ? theme.typography.fontWeightBold : theme.typography.fontWeightNormal};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.sm};
  background: ${({ theme, $active }) => $active ? theme.colors.background : 'transparent'};
  transition: background 0.2s, color 0.2s;
  outline: none;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focus};
  }
`;

const Section = styled.section`
  max-width: 900px;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;

const SectionDescription = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.typography.body};
  margin: 0;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  font-size: ${({ theme }) => theme.typography.body};
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  cursor: pointer;
  background: ${({ theme, $variant }) => $variant === 'primary' ? theme.colors.primary : theme.colors.surface};
  color: ${({ theme, $variant }) => $variant === 'primary' ? theme.colors.surface : theme.colors.primary};
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  transition: background 0.2s, color 0.2s;
  outline: none;
  &:hover,
  &:focus {
    background: ${({ theme, $variant }) => $variant === 'primary' ? theme.colors.accent : theme.colors.background};
    color: ${({ theme, $variant }) => $variant === 'primary' ? theme.colors.surface : theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.focus};
  }
`;

// Demo UI (replace with actual content from provided image)
const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header>
        <Title>AIP Dashboard</Title>
        <Nav aria-label="Main navigation">
          <NavLink href="#" $active>Home</NavLink>
          <NavLink href="#">Insights</NavLink>
          <NavLink href="#">Settings</NavLink>
        </Nav>
      </Header>
      <Section aria-labelledby="section-title">
        <SectionHeader>
          <SectionTitle id="section-title">Welcome to your dashboard</SectionTitle>
          <SectionDescription>
            View analytics, manage your account, and explore new features.
          </SectionDescription>
        </SectionHeader>
        <ButtonRow>
          <Button $variant="primary">Get Started</Button>
          <Button $variant="secondary">Learn More</Button>
        </ButtonRow>
      </Section>
    </AppContainer>
  </ThemeProvider>
);

export default App;
