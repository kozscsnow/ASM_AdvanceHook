import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../../App.css';
import { GlobalActions } from '../../../../redux/rootAction';
import './ResultTable.css';

function ResultTable(props) {
  const dispatch = useDispatch();
  const listCocktails = useSelector(
    (state) => state.GlobalReducer.listCocktails
  );

  const getCocktail = (cocktail) => {
    dispatch(GlobalActions.pushCocktailsSelected(cocktail));
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
        <td className="text-center">{cocktail.strDrink}</td>
        <td className="d-flex justify-content-center">
          <Link
            className="btn btn-info "
            value={cocktail.idDrink}
            to={`/${cocktail.idDrink}`}
          >
            View Detail
          </Link>
        </td>
        <td className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              getCocktail(cocktail);
            }}
          >
            Add
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      {listCocktails && (
        <table className="table table-striped table-hover table-dark">
          <thead>
            <tr>
              <th className="text-center">STT</th>
              <th className="text-center">Image</th>
              <th className="text-center">Name</th>
              <th className="text-center">Detail</th>
              <th className="text-center">Cart</th>
            </tr>
          </thead>
          <tbody>{listCocktails.map(renderDrinks)}</tbody>
        </table>
      )}
    </div>
  );
}

export default ResultTable;
