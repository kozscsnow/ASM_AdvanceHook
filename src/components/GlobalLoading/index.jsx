import React from 'react';
import { useSelector } from 'react-redux';
import styles from './GlobalLoading.module.css';
import { Roller } from 'react-awesome-spinners';

function GlobalLoading({ children }) {
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  return (
    // <div className={styles.loading}>
    <div className={styles.loading}>
      {isLoading ? (
        <div className={styles.loading__container}>
          <Roller color="yellow"/>
        </div>
      ) : null}
    </div>
  );
}

export default GlobalLoading;
