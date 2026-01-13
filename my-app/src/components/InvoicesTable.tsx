// src/components/InvoicesTable.tsx
import React from 'react';
import styled from 'styled-components';
import { tableData } from '../data/mockData';
import Badge from './ui/Badge';

const TableWrapper = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing.xl} 0;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  min-width: 600px;
`;

const StatusBadge = styled(Badge)<{ $status: string }>`
  ${({ $status, theme }) => {
    switch ($status) {
      case 'Paid':
        return `background: ${theme.colors.success}22; color: ${theme.colors.success};`;
      case 'Pending':
        return `background: ${theme.colors.warning}22; color: ${theme.colors.warning};`;
      case 'Overdue':
        return `background: ${theme.colors.danger}22; color: ${theme.colors.danger};`;
      default:
        return '';
    }
  }}
`;

const InvoicesTable: React.FC = () => (
  <TableWrapper aria-labelledby="invoices-heading">
    <h2 id="invoices-heading" style={{ margin: 0, fontSize: '1.25rem' }}>Recent Invoices</h2>
    <StyledTable role="table" aria-label="Invoices">
      <thead>
        <tr>
          <th scope="col">Invoice ID</th>
          <th scope="col">Customer</th>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(row => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.customer}</td>
            <td>{row.date}</td>
            <td>{row.amount}</td>
            <td>
              <StatusBadge $status={row.status} $color={
                row.status === 'Paid' ? 'success' : row.status === 'Pending' ? 'warning' : 'danger'
              }>
                {row.status}
              </StatusBadge>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </TableWrapper>
);

export default InvoicesTable;
