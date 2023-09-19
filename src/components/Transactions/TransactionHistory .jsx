import {
  TransactionTable,
  TransactionTableHead,
  TransactionCell,
  TransactionType,
  TransactionData,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
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
        {items.map(item => (
          <TransactionCell key={item.id}>
            <TransactionData>{item.type}</TransactionData>
            <TransactionData>{item.amount}</TransactionData>
            <TransactionData>{item.currency}</TransactionData>
          </TransactionCell>
          // <TransactionCell>
          //   <TransactionData></TransactionData>
          //   <TransactionData></TransactionData>
          //   <TransactionData></TransactionData>
          // </TransactionCell>
        ))}
      </tbody>
    </TransactionTable>
  );
};
