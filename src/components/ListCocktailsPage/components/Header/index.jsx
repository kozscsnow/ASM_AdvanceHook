import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Header.module.css';
import { GlobalActions } from '../../../../redux/slices/globalSlice';

function Header(props) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(GlobalActions.handleUserLogout())
  };

  return (
    <div className={styles.header}>
      <button className="btn btn-light mt-2 mx-2">Logo</button>
      <div>
        <Link className="btn btn-info mt-2 mx-2" to="/about">
          About
        </Link>
        <Link className="btn btn-info mt-2 mx-2" to="/contact">
          Contact
        </Link>
      </div>
      <Link className="btn btn-success mt-2" onClick={handleLogout}>
        Log Out
      </Link>
      <Link
        to="/cart"
        className="btn btn-primary"
        style={{ position: 'fixed', top: '2vw', right: '10vw' }}
      >
        Go Cart
      </Link>
    </div>
  );
}

export default Header;
