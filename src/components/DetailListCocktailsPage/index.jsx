import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { GlobalActions } from '../../redux/rootAction';

function DetailListCocktailsPage(props) {
  const [cocktailInfoFromID, setCocktailInfoFromID] = useState([]);
  const cocktailInfo = useSelector((state) => state.GlobalReducer.cocktailInfo);
  const location = useLocation();
  const dispatch = useDispatch();

  const cocktailID = cocktailInfo.idDrink;

  console.log(location.search);
  useEffect(() => {
    dispatch(GlobalActions.setIsLoading(true));
    //Get Cocktail from ID
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${
          cocktailID ? cocktailID : '17225'
        }`
      )
      .then((response) => {
        const dataCocktailInfoFromID = response.data.drinks;
        setCocktailInfoFromID(dataCocktailInfoFromID[0]);
        dispatch(GlobalActions.setIsLoading(false));
      })
      .catch((e) => {
        dispatch(GlobalActions.setIsLoading(true));
        alert(`
      Something wrong !!!
      Please try again or check your connection
      `);
      });
  }, [dispatch, cocktailID]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <Link to="/" className="btn btn-primary my-2">
            Back
          </Link>
          <table className="table table-striped table-hover table-dark ">
            <thead>
              <tr className="text-center">
                <th className="text-center"></th>
                <th className="text-center">
                  {cocktailInfoFromID.strCategory}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style={{ minWidth: '140px' }}>Alcoholic</th>
                <td>{cocktailInfoFromID.strAlcoholic}</td>
              </tr>
              <tr>
                <th>Glass</th>
                <td>{cocktailInfoFromID.strGlass}</td>
              </tr>
              <tr>
                <th>Measure 1</th>
                <td>{cocktailInfoFromID.strMeasure1}</td>
              </tr>
              <tr>
                <th>Measure 2</th>
                <td>{cocktailInfoFromID.strMeasure2}</td>
              </tr>
              <tr>
                <th>Measure 3</th>
                <td>{cocktailInfoFromID.strMeasure3}</td>
              </tr>
              <tr>
                <th>Measure 4</th>
                <td>{cocktailInfoFromID.strMeasure4}</td>
              </tr>
              <tr>
                <th>Modified</th>
                <td>{cocktailInfoFromID.dateModified}</td>
              </tr>
              <tr>
                <th>Instructions 1</th>
                <td>{cocktailInfoFromID.strInstructions}</td>
              </tr>
              <tr>
                <th>Instructions 2</th>
                <td>{cocktailInfoFromID.strInstructionsDE}</td>
              </tr>
              <tr>
                <th>Instructions 3</th>
                <td>{cocktailInfoFromID.strInstructionsIT}</td>
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
              <tr key={cocktailInfoFromID.idDrink}>
                <td className="text-center">{cocktailInfoFromID.idDrink}</td>
                <td className="text-center img-thumbnail img-thumbnail-wrapper">
                  <img
                    src={cocktailInfoFromID.strDrinkThumb}
                    className="img-thumbnail-item "
                    alt={cocktailInfoFromID.strDrink}
                  ></img>
                </td>
                <td className="text-center">{cocktailInfoFromID.strDrink}</td>
                <td className="text-center">
                  {cocktailInfoFromID.strIngredient1}
                </td>
                <td className="text-center">
                  {cocktailInfoFromID.strIngredient2}
                </td>
                <td className="text-center">
                  {cocktailInfoFromID.strIngredient3}
                </td>
                <td className="text-center">
                  {cocktailInfoFromID.strIngredient4}
                </td>
                <td className="text-center">
                  {cocktailInfoFromID.strIngredient5}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailListCocktailsPage;
