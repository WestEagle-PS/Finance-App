import ExpensesListItem from './ExpensesListItem/ExpensesListItem';
// import data from '../ExpensesList/data.json';
import { selectCategories } from 'redux/transaction/transaction-selectors';
//  selectAllTransactions
 
// import { useState } from 'react';
import { useSelector } from 'react-redux';
// useDispatch

import styles from './ExpensesList.module.scss';

const ExpensesList = () => {

//   const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  console.log(categories)
  const arrwithoutIncome = categories.slice(0, -1)
  
  const element =arrwithoutIncome.map(item => (
    
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
