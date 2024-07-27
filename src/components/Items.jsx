import Item from "./Item";
import styles from "./items.module.css";

export default function Items({ food, isLoading }) {
  return (
    <div className={styles.ingredientContainer}>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        Array.isArray(food.extendedIngredients) &&
        food.extendedIngredients.length > 0 &&
        food.extendedIngredients.map((item, index) => (
          <Item key={index} item={item} index={index} />
        ))
      )}
    </div>
  );
}
