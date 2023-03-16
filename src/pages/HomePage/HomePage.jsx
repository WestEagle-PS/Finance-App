import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategories } from 'redux/transaction/transaction-operations';
import AddButton from 'shared/components/AddButton/ButtonPlus';
import Modal from 'shared/components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import css from './home-page.module.scss';
import Header from 'components/Header/Header';
import Currency from 'components/Currency/Currency';
import PieChartComponent from 'components/ChartDiagram/ChartDiagram';
import NavigationDashboard from 'components/NavigationDashboard/NavigationDashboard';
import Balance from 'components/Balance/Balance';


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
      <h2 className={css.title}>Hello! It`s Home page</h2>
      <NavigationDashboard />
      <Balance />
      <Currency />
      
      <PieChartComponent />
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
