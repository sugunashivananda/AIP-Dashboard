import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.muted};
`;

const Footer: React.FC = () => (
  <FooterWrapper>
    &copy; {new Date().getFullYear()} AIP Dashboard. All rights reserved.
  </FooterWrapper>
);

export default Footer;
