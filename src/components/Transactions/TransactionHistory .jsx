import {
  TransactionTable,
  TransactionTableHead,
  TransactionCell,
  TransactionType,
  TransactionTableBody,
  TransactionData,
} from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionTableHead>
        <tr>
          <TransactionType>Type</TransactionType>
          <TransactionType>Amount</TransactionType>
          <TransactionType>Currency</TransactionType>
        </tr>
      </TransactionTableHead>
      <tbody>
        <TransactionCell>
          <TransactionData></TransactionData>
          <TransactionData></TransactionData>
          <TransactionData></TransactionData>
        </TransactionCell>
        <TransactionCell>
          <TransactionData></TransactionData>
          <TransactionData></TransactionData>
          <TransactionData></TransactionData>
        </TransactionCell>
      </tbody>
    </TransactionTable>
  );
};
