import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getTransactionSummary } from 'redux/summary/summary-operations';
import { month } from 'components/MonthCalendar/MonthCalendar';
import { year } from 'components/YearsCalendar/YearsCalendar';
import PieChartComponent from 'components/PageLayout/ChartDiagram/ChartDiagram';
import MonthCalendar from 'components/MonthCalendar/MonthCalendar';
import YearsCalendar from 'components/YearsCalendar/YearsCalendar';


import css from './statistic-page.module.scss';
import ExpensesList from 'components/ExpensesList/ExpensesList';

const StatisticPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactionSummary({month, year}))
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <PieChartComponent />
      <div className={css.box}>
        <div className={css.innerBox}>
          <MonthCalendar />
          <YearsCalendar />
        </div>
        <ExpensesList />
      </div>
    </div>
  );
};

export default StatisticPage;
