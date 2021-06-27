import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalActions } from '../../redux/rootAction';
import styles from './NotFound.module.css';

NotFound.propTypes = {};

function NotFound(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    const loadingFake = setTimeout(() => {
      dispatch(GlobalActions.setIsLoading(false));
    }, 500);
    return () => {
      clearTimeout(loadingFake);
    };
  });
  return (
    <div>
      <div className={styles.notFound}>
        <h1>Note Found</h1>
        <h1>Note Found</h1>
      </div>
    </div>
  );
}

export default NotFound;
