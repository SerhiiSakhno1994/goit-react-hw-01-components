import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem/TransactionItem";
import s from './TransactionHistory.module.css';


function TransactionHistory({items}) {
    return (
        <table className={s.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(e => (<TransactionItem key={e.id} item={e} />
      ))
      }
    </tbody>
  </table>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TransactionHistory;