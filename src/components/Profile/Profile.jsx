import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.scss';

export const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.statistics}>
        <li>
          <span>Followers</span>
          <span> {followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span> {views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
