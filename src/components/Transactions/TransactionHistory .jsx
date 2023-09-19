import PropTypes from 'prop-types';

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
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
