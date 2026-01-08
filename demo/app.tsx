import React from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';

// Theme definition
const theme: DefaultTheme = {
  colors: {
    primary: '#2D6CDF',
    secondary: '#F5F7FB',
    background: '#FFFFFF',
    text: '#222B45',
    accent: '#FFAA00',
    border: '#E4E9F2',
    focus: '#1A4FB4',
    disabled: '#C5CEE0',
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
    fontWeight: 400,
    headingWeight: 600,
    headingSize: '24px',
    subHeadingSize: '18px',
  },
};

// Styled Components
const AppContainer = styled.main`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

const Header = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.typography.headingSize};
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled.a<{ $active?: boolean }>`
  color: #fff;
  text-decoration: none;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  border-bottom: 2px solid
    ${({ theme, $active }) => ($active ? theme.colors.accent : 'transparent')};
  padding-bottom: 2px;
  transition: border-color 0.2s;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  max-width: 800px;
  box-shadow: 0 2px 8px rgba(44, 72, 130, 0.06);
`;

const SectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.typography.headingSize};
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SectionSubHeading = styled.h3`
  font-size: ${({ theme }) => theme.typography.subHeadingSize};
  font-weight: ${({ theme }) => theme.typography.headingWeight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Button = styled.button<{ $variant?: 'primary' | 'secondary'; $disabled?: boolean }>`
  background: ${({ theme, $variant }) =>
    $variant === 'secondary' ? theme.colors.secondary : theme.colors.primary};
  color: ${({ theme, $variant }) =>
    $variant === 'secondary' ? theme.colors.primary : '#fff'};
  border: none;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize};
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(44, 72, 130, 0.04);
  transition: background 0.2s, color 0.2s;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
  &:hover:not(:disabled) {
    background: ${({ theme, $variant }) =>
      $variant === 'secondary' ? theme.colors.background : theme.colors.focus};
    color: ${({ theme, $variant }) =>
      $variant === 'secondary' ? theme.colors.focus : '#fff'};
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.disabled};
    color: #fff;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

// Demo content
const DemoApp: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header>
          <Logo>AIP Dashboard</Logo>
          <Nav aria-label="Main Navigation">
            <NavLink href="#" $active>Home</NavLink>
            <NavLink href="#">Reports</NavLink>
            <NavLink href="#">Settings</NavLink>
          </Nav>
        </Header>
        <Section>
          <SectionHeading>Welcome to the Dashboard</SectionHeading>
          <SectionSubHeading>Get insights and manage your data efficiently.</SectionSubHeading>
          <Button $variant="primary">Get Started</Button>
          <Button $variant="secondary" style={{ marginLeft: theme.spacing.md }}>Learn More</Button>
        </Section>
      </AppContainer>
    </ThemeProvider>
  );
};

export default DemoApp;
