import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';

export const FriendListItem = props => {
  const { avatar, name, isOnline } = props;
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.onLine : styles.offline}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
