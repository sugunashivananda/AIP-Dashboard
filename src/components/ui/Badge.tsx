import React from 'react';
import styled from 'styled-components';

type BadgeProps = {
  children: React.ReactNode;
  status?: 'Paid' | 'Pending' | 'Overdue';
};

const getBgColor = (status: BadgeProps['status'], theme: any) => {
  switch (status) {
    case 'Paid':
      return theme.colors.success;
    case 'Pending':
      return theme.colors.badgeBg;
    case 'Overdue':
      return theme.colors.danger;
    default:
      return theme.colors.badgeBg;
  }
};

const getTextColor = (status: BadgeProps['status'], theme: any) => {
  switch (status) {
    case 'Paid':
      return '#fff';
    case 'Pending':
      return theme.colors.badgeText;
    case 'Overdue':
      return '#fff';
    default:
      return theme.colors.badgeText;
  }
};

const StyledBadge = styled.span<{ $status?: BadgeProps['status'] }>`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background: ${({ $status, theme }) => getBgColor($status, theme)};
  color: ${({ $status, theme }) => getTextColor($status, theme)};
`;

const Badge: React.FC<BadgeProps> = ({ children, status }) => (
  <StyledBadge $status={status} aria-label={status ? `${status} status` : undefined}>
    {children}
  </StyledBadge>
);

export default Badge;
