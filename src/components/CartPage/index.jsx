import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { GlobalActions } from '../../redux/rootAction';

function CartPage(props) {
  const listCocktailsSelected = useSelector(
    (state) => state.GlobalReducer.listCocktailsSelected
  );
  const dispatch = useDispatch();

  const removeCocktail = (indexCocktail) => {
    dispatch(GlobalActions.removeCocktailsSelected(indexCocktail));
  };
  //Fake Loading
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    const loadingFake = setTimeout(() => {
      dispatch(GlobalActions.setIsLoading(false));
    }, 500);
    return () => {
      clearTimeout(loadingFake);
    };
  }, [dispatch]);

  const renderDrinks = (cocktail, index) => {
    return (
      <tr key={uuid()}>
        <td className="text-center">{index + 1}</td>
        <td className="text-center img-thumbnail img-thumbnail-wrapper">
          <img
            src={cocktail.strDrinkThumb}
            className="img-thumbnail-item "
            alt={cocktail.strDrink}
          ></img>
        </td>
        <td>{cocktail.strDrink}</td>
        <td>
          <button
            className="btn btn-info "
            onClick={() => removeCocktail(index)}
          >
            Remove
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <Link to="/" className="btn btn-primary my-2">
            Back
          </Link>
          <table className="table table-striped table-hover table-dark">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Image</th>
                <th className="text-center">Name</th>
                <th className="text-center"></th>
              </tr>
            </thead>
            <tbody>{listCocktailsSelected.map(renderDrinks)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
