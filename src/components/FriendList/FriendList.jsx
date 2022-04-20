import PropTypes from "prop-types";
import FriendItem from "./FriendItem/FriendItem";
import s from './FriendList.module.css';


function FriendList({ friends }) { 
    return (
        <ul className={s.friendsList}>
    {friends.map(el => (<FriendItem key={el.id} arr={el} />
    ))}
  </ul>
    );


};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
  el: PropTypes.object,
};

export default FriendList;