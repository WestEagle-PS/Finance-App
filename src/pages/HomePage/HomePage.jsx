import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategories } from 'redux/transaction/transaction-operations';
import AddButton from 'shared/components/AddButton/ButtonPlus';
import Modal from 'shared/components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import css from './home-page.module.scss';
import Header from 'components/Header/Header';
// import Currency from 'components/DashBoard/SideBar/Currency/Currency';
import ChartStat from 'components/DashBoard/ChartStat/ChartStat';
// import PieChartComponent from 'components/DashBoard/ChartDiagram/ChartDiagram';
// import NavigationDashboard from 'components/DashBoard/SideBar/NavigationDashboard/NavigationDashboard';
// import Balance from 'components/DashBoard/SideBar/Balance/Balance';
// import SideBar from 'components/DashBoard/SideBar/SideBar';
import DashBoard from 'components/DashBoard/DashBoard';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const handleAddBtnClick = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onAddFormSubmit = data => {
    console.log('formData', data);
    setShowModal(false);
  };

  return (
    <div className="container">
      <Header />
      <h2 className={css.title}>Home page</h2>
      <DashBoard />
      <ChartStat />
      {/* <PieChartComponent /> */}
      <AddButton type="button" onBtnClick={handleAddBtnClick} />
      {showModal && (
        <Modal onClose={onCloseModal}>
          <AddTransactionForm onSubmit={onAddFormSubmit} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
