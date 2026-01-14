import React from 'react';
import styled from 'styled-components';
import { tableData } from '../data/mockData';
import Badge from './ui/Badge';

const TableSection = styled.section`
  background: #fff;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.04);
  padding: ${({ theme }) => theme.spacing.lg};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.muted};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.secondary};
`;

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Row = styled.tr`
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const InvoicesTable: React.FC = () => (
  <TableSection aria-labelledby="invoices-heading">
    <h2 id="invoices-heading" style={{ fontSize: '20px', marginBottom: '16px' }}>Recent Invoices</h2>
    <Table>
      <thead>
        <tr>
          <Th>Invoice #</Th>
          <Th>Client</Th>
          <Th>Date</Th>
          <Th>Status</Th>
          <Th>Amount</Th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((invoice) => (
          <Row key={invoice.id}>
            <Td>{invoice.number}</Td>
            <Td>{invoice.client}</Td>
            <Td>{invoice.date}</Td>
            <Td><Badge status={invoice.status}>{invoice.status}</Badge></Td>
            <Td>${invoice.amount}</Td>
          </Row>
        ))}
      </tbody>
    </Table>
  </TableSection>
);

export default InvoicesTable;
