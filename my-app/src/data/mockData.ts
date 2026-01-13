// src/data/mockData.ts
import React from 'react';

export const sidebarMenu = [
  { label: 'Dashboard', href: '#', icon: <span>🏠</span>, active: true },
  { label: 'Invoices', href: '#', icon: <span>🧾</span> },
  { label: 'Customers', href: '#', icon: <span>👥</span> },
  { label: 'Reports', href: '#', icon: <span>📊</span> },
  { label: 'Settings', href: '#', icon: <span>⚙️</span> },
];

export interface InvoiceRow {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export const tableData: InvoiceRow[] = [
  { id: 'INV-001', customer: 'Acme Corp', date: '2024-06-01', amount: '$1,200.00', status: 'Paid' },
  { id: 'INV-002', customer: 'Beta LLC', date: '2024-06-03', amount: '$850.00', status: 'Pending' },
  { id: 'INV-003', customer: 'Gamma Inc', date: '2024-06-05', amount: '$2,400.00', status: 'Overdue' },
  { id: 'INV-004', customer: 'Delta Ltd', date: '2024-06-07', amount: '$650.00', status: 'Paid' },
  { id: 'INV-005', customer: 'Epsilon GmbH', date: '2024-06-09', amount: '$1,100.00', status: 'Pending' },
];
