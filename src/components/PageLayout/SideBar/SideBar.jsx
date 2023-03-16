import React from 'react';
import Balance from './Balance/Balance';
import Currency from './Currency/Currency';
import NavigationDashboard from './NavigationDashboard/NavigationDashboard';
import s from './SideBar.module.scss';

const SideBar = () => {
  return (
    <div className={s.wrapper}>
      <NavigationDashboard />
      <Balance />
      <Currency />
    </div>
  );
};

export default SideBar;
