import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';
import CartBox from './components/CartBox';
import NumberDrinksBox from './components/NumberDrinksBox';
import Header from './components/Header';
import ResultTable from './components/ResultTable';

function ListCocktailsPage(props) {
  // const listCocktails = useSelector(
  //   (state) => state.GlobalReducer.listCocktails
  // );
  const [test, setTest] = useState(true);
  const dispatch = useDispatch();
  // const count = useSelector((state) => state.GlobalReducer.count);
  // const isLoading = useSelector((state) => state.GlobalReducer.isLoading);
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
      })
      .catch((e) => {
        dispatch(GlobalActions.setIsLoading(true));
        alert(`
        Something wrong !!!
        Please try again or check your connection
        `);
      });
  };

  return (
    <div>
      <div className="container" style={{ position: 'relative' }}>
        <div className="row justify-content-center">
          <div className="col-8">
            <Header />
            <NumberDrinksBox />
            <ResultTable />
            <CartBox />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCocktailsPage;
