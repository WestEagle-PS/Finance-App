import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction, getAllCategories, getAllTransactions } from 'redux/transaction/transaction-operations';
import AddButton from 'shared/components/AddButton/AddButton';
import Modal from 'shared/components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import css from './home-page.module.scss';
import TransactionsList from 'components/TransactionsList/TransactionsList';
import TransactionListMobile from 'components/TransactionsListMobile/TransactionsListMobile';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllTransactions());
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

  return (
    <div className={css.wrapper}>
      <TransactionsList setShowModal={setShowModal} />
      <AddButton type="button" onBtnClick={handleAddBtnClick} />
      {/* <TransactionListMobile /> */}
      {showModal && (
        <Modal onClose={onCloseModal}>
          <AddTransactionForm onSubmit={onAddFormSubmit} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
