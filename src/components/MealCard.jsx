import React from 'react';
import './cardStyle.css';


const MealCard = ({ meal }) => {
  return (
    <div className="cardStyle">
      <h2>{meal.strMeal}</h2>
      <h3>Categorie de plat:</h3>
      <p>{meal.strCategory}</p>
      <h3>Origine du plat :</h3>
      <p>{meal.strArea}</p>
    </div>
  );
};


export default MealCard;
