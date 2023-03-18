import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/transaction/transaction-selectors';
import {
  selectorCategoriesSummary,
  selectorIncomeSummary,
  selectorExpenseSummary,
} from 'redux/summary/summary-selectors';

import ExpensesListItem from './ExpensesListItem/ExpensesListItem';

import styles from './ExpensesList.module.scss';

const ExpensesList = () => {
  const categories = useSelector(selectCategories);
  const categoriesSummary = useSelector(selectorCategoriesSummary);
  const incomeSummary = useSelector(selectorIncomeSummary);
  const expenseSummary = useSelector(selectorExpenseSummary);

  const arrWithoutIncome = categories.slice(0, -1);
  const filteredCategoriesSummary = categoriesSummary.filter(item => item.type !== 'INCOME');
  const categoriesArrWithSum = arrWithoutIncome.map(item => {
    const value = filteredCategoriesSummary.find(elem => elem.name === item.name);
    if (value) {
      return { id: item.id, name: item.name, sum: `${value.total * -1}.00` };
    }
    return { id: item.id, name: item.name, sum: '0.00' };
  });

  const element = categoriesArrWithSum.map(item => (
    <ExpensesListItem key={item.id} category={item.name} sum={item.sum} />
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
          <span className={styles.expensesText}>{expenseSummary}.00</span>
        </div>
        <div className={styles.income}>
          <p className={styles.text}>Income:</p>
          <span className={styles.incomeText}>{incomeSummary}.00</span>
        </div>
      </div>
    </div>
  );
};

export default ExpensesList;
