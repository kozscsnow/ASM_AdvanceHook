import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import styles from './About.module.css';

function About(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(false));
  }, []);
  return (
    <>
      <div className={styles.about__link}>
        <Link className="btn btn-info" to="/">
          Back
        </Link>
      </div>

      <div className={styles.about}>
        <h1>About</h1>
        <h1>About</h1>
      </div>
    </>
  );
}

export default About;
