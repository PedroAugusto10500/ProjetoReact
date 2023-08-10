

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

function LinkButton({ to, text }) {
  return (
    <div className={styles['btn-container']}>
      <div className={styles.btn}>
        <div className={styles.link_wrapper}>
          <Link className={styles['btn-link']} to={to}>
            {text}
          </Link>
          <div className={styles['btn-icon']}>
            <svg viewBox="0 0 24 24">
            
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkButton;

