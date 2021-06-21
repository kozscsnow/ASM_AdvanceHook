import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import styles from './Contact.module.css';


function Contact(props) {
  const dispatch = useDispatch();

  //Fake Loading
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
    <>
      <div className={styles.contact__link}>
        <Link className="btn btn-info" to="/">
          Back
        </Link>
      </div>

      <div className={styles.contact}>
        <h1>Contact</h1>
        <h1>Contact</h1>
      </div>
    </>
  );
}

export default Contact;
