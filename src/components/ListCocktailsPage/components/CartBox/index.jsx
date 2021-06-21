import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
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
      <div key={uuid()} className="cart-box__items">
        <div className="text-center img-thumbnail img-thumbnail-wrapper cart-box__thumbnail">
          <img
            src={cocktail.strDrinkThumb}
            className="img-thumbnail-item "
            alt={cocktail.strDrink}
          ></img>
        </div>
        <div className="item__name cart-box__name">{cocktail.strDrink}</div>
        <div>
          <button
            className="btn btn-info cart-box__btn--large"
            onClick={() => removeCocktail(index)}
          >
            Remove
          </button>
          <button
            className="btn btn-info cart-box__btn--small"
            onClick={() => removeCocktail(index)}
          >
            X
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
