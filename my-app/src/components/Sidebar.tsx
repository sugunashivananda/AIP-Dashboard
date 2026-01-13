// src/components/Sidebar.tsx
import React from 'react';
import styled from 'styled-components';
import { sidebarMenu } from '../data/mockData';

const SidebarWrapper = styled.nav`
  width: 240px;
  background: ${({ theme }) => theme.colors.surface};
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  position: sticky;
  top: 0;
  left: 0;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li<{ $active?: boolean }>`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  a {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xl};
    border-radius: ${({ theme }) => theme.radii.md};
    color: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.text};
    background: ${({ theme, $active }) => $active ? theme.colors.secondary : 'transparent'};
    font-weight: ${({ $active }) => $active ? 600 : 400};
    transition: background 0.2s, color 0.2s;
    &:hover, &:focus {
      background: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
      outline: none;
    }
  }
`;

const Sidebar: React.FC = () => (
  <SidebarWrapper aria-label="Sidebar navigation">
    <MenuList>
      {sidebarMenu.map(item => (
        <MenuItem key={item.label} $active={item.active}>
          <a href={item.href} tabIndex={0} aria-current={item.active ? 'page' : undefined}>
            {item.icon && <span aria-hidden="true">{item.icon}</span>}
            {item.label}
          </a>
        </MenuItem>
      ))}
    </MenuList>
  </SidebarWrapper>
);

export default Sidebar;
