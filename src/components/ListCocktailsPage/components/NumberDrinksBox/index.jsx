import React from 'react';
import { useSelector } from 'react-redux';
import '../../../../App.css';
import './NumberDrinksBox.css';

function NumberDrinkBox(props) {
  const { listCocktails } = props;
  return (
    <div>
      {listCocktails ? (
        <h4 className="my-3"> We have {listCocktails.length} Drinks</h4>
      ) : (
        <h4 className="my-3">Sorry !! We can not find this Drink</h4>
      )}
    </div>
  );
}

export default NumberDrinkBox;
