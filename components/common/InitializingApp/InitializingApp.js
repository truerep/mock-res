'use client';

import React from 'react';
import styles from './styles.module.css';

const InitializingApp = ({
  handleLiClass,
  activeIndex
}) => (
  <div className={styles.section}>
    <div className={styles.stepContainer}>
      <ul className={styles.steps}>
        <li className={`${handleLiClass(0)} ${activeIndex === 1 && styles.active}`}>Welcome Lazy Dev</li>
        <li className={`${handleLiClass(1)} ${activeIndex === 2 && styles.active}`}>Generating Endpoint</li>
        <li className={`${handleLiClass(2)} ${activeIndex === 3 && styles.active}`}>Finalizing Details</li>
        <li className={`${handleLiClass(3)} ${activeIndex === 4 && styles.active}`}>Redirecting...</li>
      </ul>
    </div>
  </div>
);

export default InitializingApp;
