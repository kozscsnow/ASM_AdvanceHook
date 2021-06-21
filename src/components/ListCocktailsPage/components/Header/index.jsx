import { lightGreen } from '@material-ui/core/colors';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalActions } from '../../../../redux/slices/globalSlice';
import styles from './Header.module.css';

function Header(props) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(GlobalActions.resetStoreRedux());
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
      <Link to="/login" className="btn btn-success mt-2" onClick={handleLogout}>
        Log Out
      </Link>
      <Link to="/cart" style={{ position: 'fixed', top: '8px', right: '10vw' }}>
        <ShoppingCartIcon
          fontSize="large"
          style={{ color: lightGreen[500], fontSize: 50 }}
        />
      </Link>
    </div>
  );
}

export default Header;
