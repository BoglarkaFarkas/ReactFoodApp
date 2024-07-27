import styles from "./item.module.css";

export default function Item({ item, index }) {
  return (
    <div className={styles.itemContainer} key={index}>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
        alt={item.name}
        className={styles.itemImage}
      />
      <h3 className={styles.itemName}>{item.name}</h3>
      <h3 className={styles.itemAmount}>
        {item.amount} {item.unit}
      </h3>
    </div>
  );
}
