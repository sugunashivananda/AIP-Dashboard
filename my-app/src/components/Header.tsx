// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0 ${({ theme }) => theme.spacing.xl};
  letter-spacing: -1px;
`;

const UserMenu = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-right: ${({ theme }) => theme.spacing.xl};
`;

const UserAvatar = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  transition: border-color 0.2s;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <Logo>AIP Dashboard</Logo>
    <UserMenu aria-label="User menu">
      <UserAvatar aria-label="Open user menu" tabIndex={0}>JD</UserAvatar>
    </UserMenu>
  </HeaderWrapper>
);

export default Header;
