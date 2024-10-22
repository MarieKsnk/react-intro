import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import MealCard from './components/MealCard';
import Nav from './components/Nav';

const App = () => {

    const [meals, setMeals] = useState([]);
  
    useEffect(() => {
      
      const fetchMeals = async () => {
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
          setMeals(response.data.meals);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchMeals();
    }, []); 


  return (
    <>
    <div className='cards'>
    <Nav />
    <h1>Les plats disponibles</h1>
    <div>
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
    </div></div>
    </>
  )
}

export default App
