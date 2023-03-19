import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction, getAllCategories, getAllTransactions } from 'redux/transaction/transaction-operations';
import { getTransactionSummary } from 'redux/summary/summary-operations';
import { month } from 'components/MonthCalendar/MonthCalendar';
import { year } from 'components/YearsCalendar/YearsCalendar';
import AddButton from 'shared/components/AddButton/AddButton';
import Modal from 'shared/components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import css from './home-page.module.scss';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import TransactionListMobile from 'components/TransactionsListMobile/TransactionsListMobile';
import useMediaQuery from 'shared/hooks/useMediaQuery';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllTransactions());
    dispatch(getTransactionSummary({month, year}))
  }, [dispatch]);

  const handleAddBtnClick = () => {
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onAddFormSubmit = data => {
    dispatch(addTransaction(data));
    setShowModal(false);
  };

  const isTablet = useMediaQuery('(min-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (

    <div className={css.wrapper}>
      {isTablet && <TransactionsList setShowModal={setShowModal} />}
      {isMobile && <TransactionListMobile  />}
      <AddButton type="button" onBtnClick={handleAddBtnClick} />

      {showModal && (
        <Modal onClose={onCloseModal}>
          <AddTransactionForm onSubmit={onAddFormSubmit} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;

