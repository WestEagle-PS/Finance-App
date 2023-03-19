import styles from "./ExpensesListItem.module.scss";

const ExpensesListItem = ({category, sum, color }) => {
  return (
    <li className={styles.item}>
      <div className={styles.box}>
      <span className={styles.block} style={{backgroundColor: color }}></span>
      <p className={styles.category}>{category}</p>
      </div>
      <span className={styles.sum}>{sum.toFixed(2)}</span>
    </li>
  );
};
export default ExpensesListItem;