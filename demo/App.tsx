import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Theme definition
const theme = {
  colors: {
    background: '#fff',
    border: '#E8E8E8',
    textPrimary: '#1A1A1A',
    textSecondary: '#3D3D3D',
    textTertiary: '#626262',
    link: '#0269D8',
    linkHover: '#0074D9',
  },
  spacing: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '16px',
    xl: '24px',
  },
  radii: {
    card: '8px',
  },
  fontSizes: {
    title: '20px',
    subtitle: '14px',
    label: '12px',
    link: '16px',
  },
  fontWeights: {
    medium: 500,
    regular: 400,
  },
  lineHeights: {
    title: '24px',
    subtitle: '20px',
    label: '16px',
    link: '20px',
  },
};

// Styled Components
const Card = styled.section`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  max-width: 462px;
  box-sizing: border-box;
`;

const TitleBlock = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const IconCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: none;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.title};
  margin: 0;
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.subtitle};
  margin: 0;
`;

const DetailsSection = styled.section`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const DetailsRows = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const DetailsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  flex: 1;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.fontSizes.label};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.label};
`;

const ValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Value = styled.span`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: ${({ theme }) => theme.fontSizes.label};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.label};
`;

const CalendarIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const LinkRow = styled.div`
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const Hyperlink = styled.a<{ $focusVisible?: boolean }>`
  color: ${({ theme }) => theme.colors.link};
  font-size: ${({ theme }) => theme.fontSizes.link};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.link};
  text-decoration: underline;
  cursor: pointer;
  outline: none;
  transition: color 0.2s;
  &:hover {
    color: ${({ theme }) => theme.colors.linkHover};
  }
  &:focus {
    color: ${({ theme }) => theme.colors.linkHover};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.linkHover};
  }
`;

// SVGs
const DocumentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <rect x="4" y="4" width="16" height="16" rx="4" fill="#1A1A1A" />
    <rect x="7" y="8" width="10" height="2" rx="1" fill="#fff" />
    <rect x="7" y="12" width="10" height="2" rx="1" fill="#fff" />
  </svg>
);

const CalendarDayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <rect x="2" y="4" width="16" height="14" rx="3" fill="#3D3D3D" />
    <rect x="6" y="8" width="8" height="2" rx="1" fill="#fff" />
  </svg>
);

// Main Component
const PlanDetails: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card aria-labelledby="plan-details-title">
        <TitleBlock>
          <TitleRow>
            <IconCircle>
              <DocumentIcon />
            </IconCircle>
            <Title id="plan-details-title">Subscription information</Title>
          </TitleRow>
          {/* Subtitle is optional, shown if needed */}
          <Subtitle>Supporting text</Subtitle>
        </TitleBlock>
        <DetailsSection>
          <DetailsRows>
            <DetailsColumn>
              <Label>Plan ID</Label>
              <ValueRow>
                <Value>[165547704320]</Value>
              </ValueRow>
            </DetailsColumn>
            <DetailsColumn>
              <Label>Start date</Label>
              <ValueRow>
                <CalendarIcon>
                  <CalendarDayIcon />
                </CalendarIcon>
                <Value>[Mar 31, 2025]</Value>
              </ValueRow>
            </DetailsColumn>
            <DetailsColumn>
              <Label>Auto-renewal date</Label>
              <ValueRow>
                <CalendarIcon>
                  <CalendarDayIcon />
                </CalendarIcon>
                <Value>[Mar 31, 2026]</Value>
              </ValueRow>
            </DetailsColumn>
          </DetailsRows>
        </DetailsSection>
        <LinkRow>
          <Hyperlink href="#" tabIndex={0} aria-label="Cancel auto-renewal">
            Cancel auto-renewal
          </Hyperlink>
        </LinkRow>
      </Card>
    </ThemeProvider>
  );
};

export default PlanDetails;
