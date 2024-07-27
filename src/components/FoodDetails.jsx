import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import Items from "./Items";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "Your Api key";

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div className={styles.foodDetails}>
      <div className={styles.header}>
        <h1 className={styles.title}>{food.title}</h1>
        <div className={styles.centeredImage}>
          <img src={food.image} alt={food.title} className={styles.image} />
        </div>
      </div>
      <div className={styles.info}>
        <span>
          <strong>🕓 {food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          <strong>👨🏼‍👩🏼‍👧🏼 Serves {food.servings}</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? "🥕 Vegetarian" : "🍖 Non-Vegetarian"}
          </strong>
        </span>
        {food.vegan && (
          <span>
            <strong>🐄 Vegan</strong>
          </span>
        )}
        <span>
          <strong>💲{food.pricePerServing / 100} Per serving</strong>
        </span>
      </div>
      <div className={styles.instructions}>
        <h2>Ingredients</h2>
        <Items food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step, index) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
