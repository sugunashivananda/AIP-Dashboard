import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

// Theme definition (should be provided at root, but included here for demo)
const theme = {
  colors: {
    background: '#fff',
    border: '#E8E8E8',
    borderLight: '#E8E8E8',
    textPrimary: '#1A1A1A',
    textSecondary: '#404040',
    textTertiary: '#636363',
    link: '#0272D8',
    linkHover: '#0056b3',
    icon: '#1A1A1A',
    iconSecondary: '#404040',
    iconCalendar: '#404040',
  },
  spacing: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
  font: {
    family: 'Forma DJR UI, Arial, sans-serif',
    sizeTitle: 20,
    sizeSubtext: 14,
    sizeLabel: 12,
    sizeLink: 16,
    weightMedium: 500,
    weightRegular: 400,
  },
  radius: {
    md: 8,
  },
};

// Styled Components
const Card = styled.section`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md}px;
  padding: ${({ theme }) => theme.spacing.xl}px;
  max-width: 462px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg}px;
`;

const TitleBlock = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const TitleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const TitleText = styled.h2`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizeTitle}px;
  font-weight: ${({ theme }) => theme.font.weightMedium};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 24px;
  margin: 0;
`;

const SubText = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizeSubtext}px;
  font-weight: ${({ theme }) => theme.font.weightRegular};
  color: ${({ theme }) => theme.colors.textTertiary};
  line-height: 20px;
  margin: 0;
`;

const DetailsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding-bottom: ${({ theme }) => theme.spacing.md}px;
`;

const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.lg}px;
`;

const DetailCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm}px;
  flex: 1;
`;

const Label = styled.span`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizeLabel}px;
  font-weight: ${({ theme }) => theme.font.weightRegular};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 16px;
`;

const ValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

const ValueText = styled.span`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizeLabel}px;
  font-weight: ${({ theme }) => theme.font.weightRegular};
  color: ${({ theme }) => theme.colors.textTertiary};
  line-height: 16px;
`;

const CalendarIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;

const LinkRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs}px;
`;

const Hyperlink = styled.a<{ $isFocus?: boolean }>`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizeLink}px;
  font-weight: ${({ theme }) => theme.font.weightRegular};
  color: ${({ theme }) => theme.colors.link};
  text-decoration: underline;
  line-height: 20px;
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

// SVGs for icons
const DocumentIcon: React.FC = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false" fill="none">
    <rect width="32" height="32" rx="16" fill="#F5F5F5" />
    <path d="M10 8h12v16H10V8zm2 2v12h8V10h-8z" fill="#1A1A1A" />
  </svg>
);

const CalendarDayIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" fill="none">
    <rect width="20" height="20" rx="10" fill="#F5F5F5" />
    <path d="M6 8h8v6H6V8zm1 1v4h6V9H7z" fill="#404040" />
  </svg>
);

// Main Component
const PlanDetails: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card aria-labelledby="plan-details-title">
        <TitleBlock>
          <TitleRow>
            <TitleIcon>
              <DocumentIcon />
            </TitleIcon>
            <TitleText id="plan-details-title">Subscription information</TitleText>
          </TitleRow>
          {/* Uncomment if subtext should be visible */}
          {/* <SubText>Supporting text</SubText> */}
        </TitleBlock>
        <DetailsSection>
          <DetailsRow>
            <DetailCol>
              <Label>Plan ID</Label>
              <ValueRow>
                <ValueText>[165547704320]</ValueText>
              </ValueRow>
            </DetailCol>
            <DetailCol>
              <Label>Start date</Label>
              <ValueRow>
                <CalendarIcon>
                  <CalendarDayIcon />
                </CalendarIcon>
                <ValueText>[Mar 31,  2025]</ValueText>
              </ValueRow>
            </DetailCol>
            <DetailCol>
              <Label>Auto-renewal date</Label>
              <ValueRow>
                <CalendarIcon>
                  <CalendarDayIcon />
                </CalendarIcon>
                <ValueText>[Mar 31,  2026]</ValueText>
              </ValueRow>
            </DetailCol>
          </DetailsRow>
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
