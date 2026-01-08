// src/theme.ts
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#2D3748',
    secondary: '#4A5568',
    accent: '#3182CE',
    background: '#F7FAFC',
    surface: '#FFFFFF',
    text: '#1A202C',
    muted: '#718096',
    border: '#E2E8F0',
    focus: '#63B3ED',
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
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    heading: {
      h1: '2rem',
      h2: '1.5rem',
      h3: '1.25rem',
    },
  },
};

// src/styled.d.ts
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      surface: string;
      text: string;
      muted: string;
      border: string;
      focus: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      fontWeight: {
        regular: number;
        medium: number;
        bold: number;
      };
      heading: {
        h1: string;
        h2: string;
        h3: string;
      };
    };
  }
}

// src/components/layout/DashboardLayout.tsx
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface DashboardLayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Sidebar = styled.nav`
  width: 240px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.lg};
`;

const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.typography.heading.h2};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.surface};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.fontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 4px;
  display: block;
  transition: background 0.2s;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.secondary};
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => (
  <Wrapper>
    <Sidebar aria-label="Main Navigation">
      <Logo>AIP Dashboard</Logo>
      <NavList>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Analytics</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Settings</NavLink>
        </NavItem>
      </NavList>
    </Sidebar>
    <Main>{children}</Main>
  </Wrapper>
);

// src/components/Card.tsx
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

const CardWrapper = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 400px;
`;

const CardTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.h3};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const CardDesc = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.typography.fontSize};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const CardButton = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.surface};
  border: none;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: background 0.2s;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.focus};
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 2px;
  }
`;

export const Card: React.FC<CardProps> = ({ title, description, actionLabel, onAction }) => (
  <CardWrapper>
    <CardTitle>{title}</CardTitle>
    <CardDesc>{description}</CardDesc>
    {actionLabel && (
      <CardButton onClick={onAction}>{actionLabel}</CardButton>
    )}
  </CardWrapper>
);

// src/App.tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { Card } from './components/Card';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <DashboardLayout>
      <header>
        <h1 style={{ marginBottom: '24px' }}>Welcome to the AIP Dashboard</h1>
      </header>
      <section aria-label="Demo Cards">
        <Card
          title="Active Users"
          description="Track the number of active users in real-time."
          actionLabel="View Details"
          onAction={() => alert('Viewing details for Active Users')}
        />
        <Card
          title="Revenue"
          description="Monitor your revenue growth and trends."
          actionLabel="View Analytics"
          onAction={() => alert('Viewing analytics for Revenue')}
        />
      </section>
    </DashboardLayout>
  </ThemeProvider>
);

export default App;

// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
