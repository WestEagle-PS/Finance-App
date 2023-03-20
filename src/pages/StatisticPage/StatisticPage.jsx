import { useEffect } from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from 'redux/transaction/transaction-operations';
import { getTransactionSummary } from 'redux/summary/summary-operations';
import { selectCategories } from 'redux/transaction/transaction-selectors';
import {
  selectCategoriesSummary,
  selectIncomeSummary,
  selectExpenseSummary,
  selectPeriodTotal,
} from 'redux/summary/summary-selectors';
import { month } from 'components/MonthCalendar/MonthCalendar';
import { year } from 'components/YearsCalendar/YearsCalendar';
import { COLORS } from 'shared/data/colors';
import PieChartComponent from 'components/PageLayout/ChartDiagram/ChartDiagram';
import MonthCalendar from 'components/MonthCalendar/MonthCalendar';
import YearsCalendar from 'components/YearsCalendar/YearsCalendar';
import ExpensesList from 'components/ExpensesList/ExpensesList';
import Loader from 'shared/components/Loader/Loader';

import css from './statistic-page.module.scss';

const StatisticPage = () => {
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(true);

  const categories = useSelector(selectCategories);
  const categoriesSummary = useSelector(selectCategoriesSummary);
  const incomeSummary = useSelector(selectIncomeSummary);
  const expenseSummary = useSelector(selectExpenseSummary);
  const periodTotal = useSelector(selectPeriodTotal);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getTransactionSummary({ month, year }));
  }, [dispatch]);

  if (!categories) {
    return <Loader />;
  }

  const categoriesWhithoutIncome = categories && categories.filter(item => item.name !== 'Income');
  const categoriesColors = categoriesWhithoutIncome.map((elem, index) => ({
    id: elem.id,
    name: elem.name,
    color: COLORS[index],
  }));
  const filteredCategoriesSummary = categoriesSummary && categoriesSummary.filter(item => item.type !== 'INCOME');
  const data =
    categoriesColors &&
    categoriesColors.map(item => {
      const value = filteredCategoriesSummary && filteredCategoriesSummary.find(elem => elem.name === item.name);
      if (value) {
        return { ...item, value: value.total * -1 };
      }
      return { ...item, value: 0 };
    });

  return (
    // <>
    //   {!isLoading && (
    <div className={css.wrapper}>
      <PieChartComponent data={data} totalSum={periodTotal} />
      <div className={css.box}>
        <div className={css.innerBox}>
          <MonthCalendar />
          <YearsCalendar />
        </div>
        <ExpensesList data={data} incomeSum={incomeSummary} expenseSum={expenseSummary} />
      </div>
    </div>
    //   )}
    // </>
  );
};

export default StatisticPage;
