import axios from 'axios';
import { debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalActions } from '../../redux/rootAction';
import CartBox from './components/CartBox';
import Header from './components/Header';
import NumberDrinksBox from './components/NumberDrinksBox';
import ResultTable from './components/ResultTable';
import ScrollToTopButton from './components/ScrollToTopButton';
import SearchInput from './components/SearchInput';

function ListCocktailsPage() {
  const dispatch = useDispatch();
  const [listCocktails, setListCocktails] = useState([]);
  const inputValue = useSelector((state) => state.GlobalReducer.inputValue);

  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    handleGetDrinks(inputValue ? inputValue : 'margarita');
  }, [inputValue, dispatch]);

  const handleGetDrinks = (searchValue) => {
    const domainURL = 'https://www.thecocktaildb.com/';
    axios
      .get(`${domainURL}api/json/v1/1/search.php?s=${searchValue}`)
      .then((response) => {
        const dataListCocktails = response.data.drinks;
        setListCocktails(dataListCocktails);
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
  const handleInputValueChange = useCallback(
    debounce((inputValue) => {
      dispatch(GlobalActions.setIsLoading(true));
      handleGetDrinks(inputValue);
      dispatch(GlobalActions.getInputValue(inputValue));
      console.log(inputValue);
    }, 300),
    [inputValue]
  );

  return (
    <div>
      <div className="container" style={{ position: 'relative' }}>
        <div className="row justify-content-center">
          <div className="col-8">
            <Header />
            <SearchInput onInputValueChange={handleInputValueChange} />
            <NumberDrinksBox listCocktails={listCocktails} />
            <ResultTable listCocktails={listCocktails} />
            <CartBox />
            <ScrollToTopButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCocktailsPage;
