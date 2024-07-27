import styles from "./fooditem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.foodItem}>
      <img src={food.image} alt={food.title} className={styles.foodImage} />
      <h1 className={styles.foodTitle}>{food.title}</h1>
      <button
        onClick={() => {
          setFoodId(food.id);
        }}
        className={styles.viewRecipeButton}
      >
        View Recipe
      </button>
    </div>
  );
}
