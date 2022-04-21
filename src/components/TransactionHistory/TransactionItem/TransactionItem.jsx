import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

function TransactionItem({ item }) {
  return (
    <tr>
      <td className={s.td}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};

export default TransactionItem;
