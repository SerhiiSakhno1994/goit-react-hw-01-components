import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

function FriendItem({ arr }) {
  return (
    <li className={s.item}>
      <span className={arr.isOnline ? s.green : s.red}>{arr.isOnline}</span>
      <img className={s.avatar} src={arr.avatar} alt={arr.name} width="48" />
      <p className={s.name}>{arr.name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  arr: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default FriendItem;
