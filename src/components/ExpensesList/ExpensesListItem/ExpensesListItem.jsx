import styles from "./ExpensesListItem.module.scss";

const ExpensesListItem = ({category, sum }) => {
  return (
    <li className={styles.item}>
      <p className={category}>{category}</p>
      <span className={styles.summ}>{sum}</span>
    </li>
  );
};
export default ExpensesListItem;