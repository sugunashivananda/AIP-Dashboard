import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Theme for colors, spacing, typography
const theme = {
  colors: {
    background: '#fff',
    border: '#E8E8E8',
    cardBorder: '#E8E8E8',
    title: '#1A1A1A',
    subtitle: '#404040',
    label: '#636363',
    value: '#3D3D3D',
    link: '#0149D8',
    linkHover: '#0073A7',
  },
  spacing: {
    cardPadding: '24px',
    sectionSpacing: '16px',
    rowSpacing: '8px',
    itemSpacing: '4px',
    labelValueSpacing: '2px',
  },
  radii: {
    card: '8px',
  },
  font: {
    family: 'Forma DJR UI, Arial, sans-serif',
    size: {
      title: '20px',
      subtitle: '14px',
      label: '12px',
      value: '12px',
      link: '16px',
    },
    weight: {
      medium: 500,
      regular: 400,
    },
    lineHeight: {
      title: '24px',
      subtitle: '20px',
      label: '16px',
      value: '16px',
      link: '20px',
    },
  },
};

// Styled Components
const Card = styled.section`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: ${({ theme }) => theme.radii.card};
  padding: ${({ theme }) => theme.spacing.cardPadding};
  width: 462px;
  box-sizing: border-box;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sectionSpacing};
`;

const TitleBlock = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.itemSpacing};
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.itemSpacing};
`;

const TitleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.title};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.title};
  line-height: ${({ theme }) => theme.font.lineHeight.title};
  margin: 0;
`;

const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.subtitle};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.subtitle};
  line-height: ${({ theme }) => theme.font.lineHeight.subtitle};
  margin: 0;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sectionSpacing};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 8px;
`;

const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.rowSpacing};
`;

const DetailsColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.itemSpacing};
`;

const Label = styled.span`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.label};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.label};
  line-height: ${({ theme }) => theme.font.lineHeight.label};
`;

const ValueRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.labelValueSpacing};
`;

const Value = styled.span`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.value};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.value};
  line-height: ${({ theme }) => theme.font.lineHeight.value};
`;

const CalendarIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;

const HyperlinkRow = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sectionSpacing};
`;

const Link = styled.a`
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.link};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.link};
  line-height: ${({ theme }) => theme.font.lineHeight.link};
  text-decoration: underline;
  cursor: pointer;
  outline: none;
  transition: color 0.2s;
  &:hover, &:focus {
    color: ${({ theme }) => theme.colors.linkHover};
  }
`;

// SVGs for icons
const DocumentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
    <rect x="6" y="6" width="20" height="20" rx="4" fill="#1A1A1A" />
    <rect x="10" y="10" width="12" height="2" rx="1" fill="#fff" />
    <rect x="10" y="14" width="12" height="2" rx="1" fill="#fff" />
    <rect x="10" y="18" width="8" height="2" rx="1" fill="#fff" />
  </svg>
);

const CalendarDayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
    <rect x="2" y="4" width="16" height="14" rx="3" fill="#3D3D3D" />
    <rect x="6" y="8" width="8" height="2" rx="1" fill="#fff" />
    <rect x="6" y="12" width="5" height="2" rx="1" fill="#fff" />
  </svg>
);

// Main Component
const SubscriptionCard: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Card aria-labelledby="subscription-title">
      <CardContent>
        <TitleBlock>
          <TitleRow>
            <TitleIcon aria-hidden="true">
              <DocumentIcon />
            </TitleIcon>
            <Title id="subscription-title">Subscription information</Title>
          </TitleRow>
          <Subtitle>Supporting text</Subtitle>
        </TitleBlock>
        <DetailsSection>
          <DetailsRow>
            <DetailsColumn>
              <Label>Plan ID</Label>
              <ValueRow>
                <Value>[165547704320]</Value>
              </ValueRow>
            </DetailsColumn>
            <DetailsColumn>
              <Label>Start date</Label>
              <ValueRow>
                <CalendarIcon aria-hidden="true">
                  <CalendarDayIcon />
                </CalendarIcon>
                <Value>[Mar 31,  2025]</Value>
              </ValueRow>
            </DetailsColumn>
            <DetailsColumn>
              <Label>Auto-renewal date</Label>
              <ValueRow>
                <CalendarIcon aria-hidden="true">
                  <CalendarDayIcon />
                </CalendarIcon>
                <Value>[Mar 31,  2026]</Value>
              </ValueRow>
            </DetailsColumn>
          </DetailsRow>
        </DetailsSection>
        <HyperlinkRow>
          <Link href="#" tabIndex={0} aria-label="Cancel auto-renewal">Cancel auto-renewal</Link>
        </HyperlinkRow>
      </CardContent>
    </Card>
  </ThemeProvider>
);

export default SubscriptionCard;
