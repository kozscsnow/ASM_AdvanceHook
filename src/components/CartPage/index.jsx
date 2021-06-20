import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';



function CartPage(props) {
  const history = useHistory();
  const handleClearLocalStorage = () => {
    localStorage.clear();
  };
  const listCocktailsSelected = useSelector(
    (state) => state.GlobalReducer.listCocktailsSelected
  );
  const dispatch = useDispatch();

  const removeCocktail = (indexCocktail) => {
    dispatch(GlobalActions.removeCocktailsSelected(indexCocktail));
  };
  const renderDrinks = (cocktail, index) => {
    return (
      <tr key={cocktail.idDrink}>
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
          <button onClick={handleClearLocalStorage}>
            Clear LocalStorage Cart
          </button>
          <Link to="/" className="btn btn-primary" >
            Back
          </Link>
          {/* <button className="btn btn-primary" onClick={() => history.push('/')}>
            Back
          </button> */}
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