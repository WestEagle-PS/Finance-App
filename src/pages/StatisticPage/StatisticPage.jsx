import PieChartComponent from 'components/PageLayout/ChartDiagram/ChartDiagram';
// import ChartStat from 'components/PageLayout/ChartStat/ChartStat';
// import css from './statistic-page.module.scss';
import ExpensesList from 'components/ExpensesList/ExpensesList';

const StatisticPage = () => {
  return (
    <div>
      {/* <ChartStat /> */}
      <ExpensesList />
      <PieChartComponent />
    </div>
  );
};

export default StatisticPage;
