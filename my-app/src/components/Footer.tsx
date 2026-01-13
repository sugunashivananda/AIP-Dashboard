// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    &copy; {new Date().getFullYear()} AIP Dashboard. All rights reserved.
  </FooterWrapper>
);

export default Footer;
