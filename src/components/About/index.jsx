import React from 'react';
import { useSelector } from 'react-redux';
import styles from './About.module.css';

function About(props) {
  const count = useSelector((state) => state.GlobalReducer.count);
  const listCocktails = useSelector(state => state.GlobalReducer.listCocktails)
  console.log(listCocktails);
  return (
    <div className={styles.about}>
      <h1>About</h1>
      <h1>About</h1>
      {listCocktails.map(cocktail => cocktail.id)}
      {count}
    </div>
  );
}

export default About;
