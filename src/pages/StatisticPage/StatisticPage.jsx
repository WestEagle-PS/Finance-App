import PieChartComponent from 'components/PageLayout/ChartDiagram/ChartDiagram';
import MonthCalendar from 'components/MonthCalendar/MonthCalendar';
import YearsCalendar from 'components/YearsCalendar/YearsCalendar';

// import ChartStat from 'components/PageLayout/ChartStat/ChartStat';
import css from './statistic-page.module.scss';
import ExpensesList from 'components/ExpensesList/ExpensesList';

const StatisticPage = () => {
  return (
    <div className={css.wrapper}>
      {/* <ChartStat /> */}
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
