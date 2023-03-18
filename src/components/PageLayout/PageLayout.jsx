import React from 'react';
import Header from 'components/Header/Header';
import SideBar from './SideBar/SideBar';
import s from './page-layout.module.scss';

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <div className={s.wrapper}>
          <SideBar />
          {children}
        </div>
      </div>
    </>
  );
};

export default PageLayout;
