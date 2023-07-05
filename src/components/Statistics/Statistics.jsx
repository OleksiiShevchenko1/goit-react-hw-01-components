import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.scss';
import generateRandomHexColor from 'utils/getRandomColors';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <section className={styles.section}>
        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.list}>
          {stats.map(item => (
            <li
              style={{ backgroundColor: generateRandomHexColor() }}
              key={item.id}
              className={styles.item}
            >
              <span className="label">{item.label}</span>
              <span className="pecentage">{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
