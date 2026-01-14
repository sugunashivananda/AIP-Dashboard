import React from 'react';
import styled from 'styled-components';
import { sidebarMenu } from '../data/mockData';

const SidebarNav = styled.nav`
  background: ${({ theme }) => theme.colors.sidebarBg};
  color: #fff;
  width: 240px;
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li<{ $active?: boolean }>`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background: ${({ $active, theme }) => ($active ? theme.colors.sidebarActive : 'transparent')};
  color: ${({ $active, theme }) => ($active ? '#fff' : theme.colors.muted)};
  font-weight: ${({ $active, theme }) => ($active ? theme.fontWeights.bold : theme.fontWeights.regular)};
  border-radius: ${({ theme }) => theme.radii.md};
  cursor: pointer;
  transition: background 0.2s;
  &:hover, &:focus {
    background: ${({ theme }) => theme.colors.sidebarActive};
    color: #fff;
  }
`;

const Sidebar: React.FC = () => (
  <SidebarNav aria-label="Main menu">
    <MenuList>
      {sidebarMenu.map((item) => (
        <MenuItem key={item.label} $active={item.active} tabIndex={0} aria-current={item.active ? 'page' : undefined}>
          {item.icon && <span aria-hidden="true" style={{ marginRight: 8 }}>{item.icon}</span>}
          {item.label}
        </MenuItem>
      ))}
    </MenuList>
  </SidebarNav>
);

export default Sidebar;
