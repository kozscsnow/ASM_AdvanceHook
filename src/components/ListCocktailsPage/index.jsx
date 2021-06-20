import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import CartBox from './components/CartBox';
import NumberDrinksBox from './components/NumberDrinksBox';
import ResultTable from './components/ResultTable';

import { Spin } from 'antd';

function ListCocktailsPage(props) {
  // const listCocktails = useSelector(
  //   (state) => state.GlobalReducer.listCocktails
  // );
  const dispatch = useDispatch();
  const count = useSelector((state) => state.GlobalReducer.count);
  const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    handleGetDrinks();
  }, []);

  const handleGetDrinks = () => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((response) => {
        const dataListCocktails = response.data.drinks;
        dispatch(GlobalActions.getListCocktailAPI(dataListCocktails));
        dispatch(GlobalActions.setIsLoading(false));

        // setIsLoading(false);
      })
      .catch((e) => {
        dispatch(GlobalActions.setIsLoading(true));
        alert(`
        Something wrong !!!
        Please try again or check your connection
        `);
      });
  };

  const handleClearLocalStorage = () => {
    localStorage.clear();
  };

  return (
    <div>
      <div className="container" style={{ position: 'relative' }}>
        <div className="row justify-content-center">
          <div className="col-8">
            <Spin size="large" />
            <button
              onClick={() => {
                dispatch(GlobalActions.increaseCounter());
              }}
            >
              Add
            </button>
            {count}
            <button onClick={handleClearLocalStorage}>
              Clear LocalStorage
            </button>
            <Link to="/about">go about</Link>
            <Link
              to="/cart"
              className="btn btn-primary"
              style={{ position: 'fixed', top: '2vw', right: '10vw' }}
            >
              Go Cart
            </Link>

            <NumberDrinksBox />
            <ResultTable />
            <CartBox />
            {/* {isLoading ? (
              <h4 className="my-3">Please wait ....</h4>
            ) : (
              <NumberDrinksBox />
            )} */}
            {/* {!isLoading && <ResultTable />} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCocktailsPage;
