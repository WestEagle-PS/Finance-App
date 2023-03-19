import ExpensesListItem from './ExpensesListItem/ExpensesListItem';

import styles from './ExpensesList.module.scss';

const ExpensesList = ({data = [], incomeSum = 0, expenseSum = 0 }) => {
  const element = data.map(item => (
    <ExpensesListItem key={item.id} category={item.name} sum={item.value} color={item.color} />
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
          <span className={styles.expensesText}>{expenseSum.toFixed(2)}</span>
        </div>
        <div className={styles.income}>
          <p className={styles.text}>Income:</p>
          <span className={styles.incomeText}>{incomeSum.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
};

export default ExpensesList;
