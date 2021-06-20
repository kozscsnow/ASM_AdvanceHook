import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GlobalActions } from '../../../../redux/rootAction';
import './CartBox.css';

CartBox.propTypes = {};

function CartBox(props) {
  const listCocktailsSelected = useSelector(
    (state) => state.GlobalReducer.listCocktailsSelected
  );
  const dispatch = useDispatch();

  const removeCocktail = (cocktail) => {
    dispatch(GlobalActions.removeCocktailsSelected(cocktail));
  };

  const renderDrinks = (cocktail, index) => {
    return (
      <div key={cocktail.idDrink} className="cart-box__items">
        <div className="text-center img-thumbnail img-thumbnail-wrapper">
          <img
            src={cocktail.strDrinkThumb}
            className="img-thumbnail-item "
            alt={cocktail.strDrink}
          ></img>
        </div>
        <div className="item__name">{cocktail.strDrink}</div>
        <div>
          <button
            className="btn btn-info "
            onClick={() => removeCocktail(index)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="cart-box">{listCocktailsSelected.map(renderDrinks)}</div>
  );
}

export default CartBox;
