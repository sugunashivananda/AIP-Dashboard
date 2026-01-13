// src/components/ui/Badge.tsx
import React from 'react';
import styled from 'styled-components';

interface BadgeProps {
  children: React.ReactNode;
  $color?: 'primary' | 'success' | 'warning' | 'danger';
}

const colorMap = {
  primary: {
    bg: (theme: any) => theme.colors.badgeBg,
    text: (theme: any) => theme.colors.badgeText,
  },
  success: {
    bg: (theme: any) => theme.colors.success + '22',
    text: (theme: any) => theme.colors.success,
  },
  warning: {
    bg: (theme: any) => theme.colors.warning + '22',
    text: (theme: any) => theme.colors.warning,
  },
  danger: {
    bg: (theme: any) => theme.colors.danger + '22',
    text: (theme: any) => theme.colors.danger,
  },
};

const BadgeWrapper = styled.span<BadgeProps>`
  display: inline-block;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 500;
  background: ${({ theme, $color = 'primary' }) => colorMap[$color].bg(theme)};
  color: ${({ theme, $color = 'primary' }) => colorMap[$color].text(theme)};
`;

const Badge: React.FC<BadgeProps> = ({ children, $color = 'primary' }) => (
  <BadgeWrapper $color={$color}>{children}</BadgeWrapper>
);

export default Badge;
