import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function DetailListCocktailsPage(props) {
  const cocktailInfo = useSelector((state) => state.GlobalReducer.cocktailInfo);

  return (
    <div>
      <br />
      <div className="container">
        <div className="row">
          <Link to="/" className="btn btn-primary mb-2">
            Back
          </Link>
          <table className="table table-striped table-hover table-dark ">
            <tr className="text-center">
              <th className="text-center"></th>
              <th className="text-center">{cocktailInfo.strDrink}</th>
            </tr>

            <tbody>
              <tr>
                <th style={{ minWidth: '140px' }}>Instructions 1</th>
                <td>{cocktailInfo.strInstructions}</td>
              </tr>
              <tr>
                <th>Instructions 2</th>
                <td>{cocktailInfo.strInstructionsDE}</td>
              </tr>
              <tr>
                <th>Instructions 3</th>
                <td>{cocktailInfo.strInstructionsIT}</td>
              </tr>
            </tbody>
          </table>
          <br />
          <table className="table table-striped table-hover table-dark">
            <thead>
              <tr>
                <th className="text-center">ID Drink</th>
                <th className="text-center">Image</th>
                <th className="text-center">Name</th>
                <th className="text-center">1st Ingredient</th>
                <th className="text-center">2nd Ingredient</th>
                <th className="text-center">3rd Ingredient</th>
                <th className="text-center">4th Ingredient</th>
                <th className="text-center">5th Ingredient</th>
              </tr>
            </thead>
            <tbody>
              <tr key={cocktailInfo.idDrink}>
                <td className="text-center">{cocktailInfo.idDrink}</td>
                <td className="text-center img-thumbnail img-thumbnail-wrapper">
                  <img
                    src={cocktailInfo.strDrinkThumb}
                    className="img-thumbnail-item "
                    alt={cocktailInfo.strDrink}
                  ></img>
                </td>
                <td className="text-center">{cocktailInfo.strDrink}</td>
                <td className="text-center">{cocktailInfo.strIngredient1}</td>
                <td className="text-center">{cocktailInfo.strIngredient2}</td>
                <td className="text-center">{cocktailInfo.strIngredient3}</td>
                <td className="text-center">{cocktailInfo.strIngredient4}</td>
                <td className="text-center">{cocktailInfo.strIngredient5}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailListCocktailsPage;
