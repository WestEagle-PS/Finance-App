import React from 'react';
import ChartStat from './ChartStat/ChartStat';
import SideBar from './SideBar/SideBar';
import s from './DashBoard.module.scss';
import PieChartComponent from './ChartDiagram/ChartDiagram';

const DashBoard = () => {
  return (
    <div className={s.wrapper}>
      <SideBar />
      <PieChartComponent />
    </div>
  );
};

export default DashBoard;
