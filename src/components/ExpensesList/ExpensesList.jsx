import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
import data from '../ExpensesList/data.json';

import styles from './ExpensesList.module.scss';

const ExpensesList = () => {
  const element = data.map(item => (
    
    <ExpensesListItem key={item.id} category={item.category} sum={item.sum} />
  ));
  return (
    <div>
      <div className={styles.title}>
        <p>Category</p>
        <p>Sum</p>
      </div>
      <div className={styles.list_box}>
        <ul className={styles.list}>{element}</ul>
        <div className={styles.expenses}>
          <p className={styles.text}>Expenses:</p>
          <span className={styles.expensesText}>25000</span>
        </div>
        <div className={styles.income}>
          <p className={styles.text}>Income:</p>
          <span className={styles.incomeText}>27000</span>
        </div>
      </div>
    </div>
  );
};

export default ExpensesList;
