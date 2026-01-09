// src/components/PlanDetails.tsx
import React from 'react';
import styled, { css } from 'styled-components';

// Theme interface and default theme
export const theme = {
  colors: {
    background: '#FFFFFF',
    border: '#E8E8E8',
    textPrimary: '#1A1A1A',
    textSecondary: '#404040',
    link: '#0074D8',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
  },
  radius: {
    sm: 8,
  },
  font: {
    family: 'Forma DJR UI, Arial, sans-serif',
    size: {
      sm: 14,
      md: 20,
    },
    weight: {
      regular: 400,
      medium: 500,
    },
    lineHeight: {
      sm: '20px',
      md: '24px',
    },
  },
};

// Styled Components
const Container = styled.section`
  background: ${theme.colors.background};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.radius.sm}px;
  padding: ${theme.spacing.lg}px;
  width: 462px;
  box-sizing: border-box;
`;

const VerticalStack = styled.div<{ $gap?: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ $gap }) => $gap ?? theme.spacing.md}px;
`;

const HorizontalStack = styled.div<{ $gap?: number; $align?: string }>`
  display: flex;
  flex-direction: row;
  gap: ${({ $gap }) => $gap ?? theme.spacing.sm}px;
  align-items: ${({ $align }) => $align ?? 'center'};
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
`;

const Title = styled.h2`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.size.md}px;
  line-height: ${theme.font.lineHeight.md};
  color: ${theme.colors.textPrimary};
  text-align: left;
  margin: 0;
`;

const Subtext = styled.p`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.regular};
  font-size: ${theme.font.size.sm}px;
  line-height: ${theme.font.lineHeight.sm};
  color: ${theme.colors.textSecondary};
  text-align: left;
  margin: 0;
`;

const Link = styled.a`
  color: ${theme.colors.link};
  text-decoration: underline;
  cursor: pointer;
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.sm}px;
  font-weight: ${theme.font.weight.medium};
  transition: color 0.2s;
  &:hover,
  &:focus {
    color: ${theme.colors.textPrimary};
    outline: 2px solid ${theme.colors.link};
    outline-offset: 2px;
  }
`;

const DataLabel = styled.span`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.sm}px;
  font-weight: ${theme.font.weight.regular};
  color: ${theme.colors.textSecondary};
`;

const DataValue = styled.span`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.sm}px;
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.textPrimary};
`;

// Document Icon SVG
const DocumentIcon: React.FC = () => (
  <IconWrapper aria-hidden="true">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" role="img" aria-label="Document">
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="#1A1A1A" strokeWidth="2" fill="none" />
      <rect x="7" y="8" width="10" height="2" rx="1" fill="#1A1A1A" />
      <rect x="7" y="12" width="10" height="2" rx="1" fill="#1A1A1A" />
    </svg>
  </IconWrapper>
);

// Main Component
export const PlanDetails: React.FC = () => {
  // Example data (replace with props or context as needed)
  const planId = 'AIP-2024-001';
  const startDate = '2024-06-01';
  const autoRenewalDate = '2025-06-01';

  return (
    <Container aria-labelledby="plan-details-title">
      <VerticalStack $gap={theme.spacing.md}>
        {/* Title Block */}
        <VerticalStack $gap={theme.spacing.xs}>
          <DocumentIcon />
          <Title id="plan-details-title">Subscription information</Title>
          {/* Subtext is hidden per Figma JSON (Visible: false) */}
        </VerticalStack>
        {/* Subscription Block */}
        <HorizontalStack $gap={theme.spacing.sm} $align="center">
          {/* Plan ID Row */}
          <VerticalStack $gap={2}>
            <DataLabel>Plan ID</DataLabel>
            <DataValue>{planId}</DataValue>
          </VerticalStack>
          {/* Start Date Row */}
          <VerticalStack $gap={2}>
            <DataLabel>Start Date</DataLabel>
            <DataValue>{startDate}</DataValue>
          </VerticalStack>
          {/* Auto-renewal Date Row */}
          <VerticalStack $gap={2}>
            <DataLabel>Auto-renewal</DataLabel>
            <DataValue>{autoRenewalDate}</DataValue>
          </VerticalStack>
        </HorizontalStack>
        {/* Hyperlink */}
        <Link href="#" tabIndex={0} aria-label="Cancel auto-renewal">Cancel auto-renewal</Link>
      </VerticalStack>
    </Container>
  );
}
