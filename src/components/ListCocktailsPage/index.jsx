import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GlobalActions } from '../../redux/rootAction';
import CartBox from './components/CartBox';
import Header from './components/Header';
import NumberDrinksBox from './components/NumberDrinksBox';
import ResultTable from './components/ResultTable';

function ListCocktailsPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    handleGetDrinks();
  });

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
