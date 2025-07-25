import { Account, Loan, Transaction, Fine, Investment, Communication, DashboardStats } from '../types';

export const mockAccounts: Account[] = [
  {
    id: '1',
    memberId: '2',
    accountType: 'savings',
    balance: 2450000,
    interestRate: 8.5,
    openingDate: '2021-03-20',
    lastTransactionDate: '2024-01-15',
    status: 'active',
  },
  {
    id: '2',
    memberId: '2',
    accountType: 'fixed',
    balance: 5000000,
    interestRate: 12.0,
    openingDate: '2023-01-10',
    lastTransactionDate: '2024-01-01',
    status: 'active',
  },
];

export const mockLoans: Loan[] = [
  {
    id: '1',
    memberId: '2',
    loanType: 'development',
    principalAmount: 10000000,
    interestRate: 15.0,
    termMonths: 24,
    monthlyPayment: 520833,
    outstandingBalance: 7500000,
    applicationDate: '2023-06-15',
    approvalDate: '2023-06-20',
    disbursementDate: '2023-06-25',
    status: 'active',
    guarantors: ['Mary Johnson', 'Peter Ssebugwawo'],
    purpose: 'House construction',
  },
  {
    id: '2',
    memberId: '2',
    loanType: 'emergency',
    principalAmount: 2000000,
    interestRate: 12.0,
    termMonths: 12,
    monthlyPayment: 177698,
    outstandingBalance: 1500000,
    applicationDate: '2024-01-10',
    approvalDate: '2024-01-12',
    disbursementDate: '2024-01-15',
    status: 'active',
    guarantors: ['Sarah Nakato'],
    purpose: 'Medical expenses',
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    memberId: '2',
    accountId: '1',
    type: 'deposit',
    amount: 500000,
    description: 'Monthly savings deposit',
    date: '2024-01-15',
    status: 'completed',
    reference: 'TXN001',
    channel: 'mobile_money',
  },
  {
    id: '2',
    memberId: '2',
    loanId: '1',
    type: 'loan_payment',
    amount: 520833,
    description: 'Development loan payment',
    date: '2024-01-10',
    status: 'completed',
    reference: 'TXN002',
    channel: 'checkoff',
  },
  {
    id: '3',
    memberId: '2',
    type: 'fine',
    amount: 50000,
    description: 'Late loan payment fine',
    date: '2024-01-05',
    status: 'completed',
    reference: 'TXN003',
    channel: 'cash',
  },
];

export const mockFines: Fine[] = [
  {
    id: '1',
    memberId: '2',
    category: 'late_payment',
    amount: 50000,
    description: 'Late loan payment - Development loan',
    dateIssued: '2024-01-05',
    datePaid: '2024-01-05',
    status: 'paid',
  },
  {
    id: '2',
    memberId: '2',
    category: 'meeting_absence',
    amount: 25000,
    description: 'Absent from monthly general meeting',
    dateIssued: '2024-01-20',
    status: 'pending',
  },
];

export const mockInvestments: Investment[] = [
  {
    id: '1',
    name: 'Government Bond Series A',
    type: 'government_bonds',
    amount: 50000000,
    interestRate: 16.5,
    maturityDate: '2026-12-31',
    currentValue: 58750000,
    status: 'active',
    purchaseDate: '2023-01-15',
  },
  {
    id: '2',
    name: 'Treasury Bills 91-day',
    type: 'treasury_bills',
    amount: 20000000,
    interestRate: 12.0,
    maturityDate: '2024-04-15',
    currentValue: 20600000,
    status: 'active',
    purchaseDate: '2024-01-15',
  },
  {
    id: '3',
    name: 'Commercial Property - Kawempe Plaza',
    type: 'real_estate',
    amount: 120000000,
    interestRate: 8.0,
    maturityDate: '2029-12-31',
    currentValue: 135000000,
    status: 'active',
    purchaseDate: '2022-06-01',
  },
];

export const mockCommunications: Communication[] = [
  {
    id: '1',
    title: 'Monthly Interest Payment',
    message: 'Your monthly interest of UGX 20,000 has been credited to your savings account.',
    type: 'sms',
    recipients: ['all_members'],
    scheduledDate: '2024-01-31',
    sentDate: '2024-01-31',
    status: 'sent',
  },
  {
    id: '2',
    title: 'Loan Payment Reminder',
    message: 'Your loan payment of UGX 520,833 is due on 2024-02-10. Please ensure sufficient funds.',
    type: 'sms',
    recipients: ['active_borrowers'],
    scheduledDate: '2024-02-05',
    status: 'scheduled',
  },
];

export const mockDashboardStats: DashboardStats = {
  totalMembers: 1247,
  activeLoans: 342,
  totalDeposits: 2847000000,
  monthlyGrowth: 12.5,
  pendingApplications: 23,
  totalInvestments: 890000000,
};