import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction, getAllCategories } from 'redux/transaction/transaction-operations';
import AddButton from 'shared/components/AddButton/AddButton';
import Modal from 'shared/components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import css from './home-page.module.scss';
import TransactionsList from 'components/TransactionsList/TransactionsList';
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
    dispatch(addTransaction(data));
    setShowModal(false);
  };

  return (
    <div className={css.wrapper}>
      <p>Home page</p>
      <AddButton type="button" onBtnClick={handleAddBtnClick} />
      <TransactionsList />
      {showModal && (
        <Modal onClose={onCloseModal}>
          <AddTransactionForm onSubmit={onAddFormSubmit} setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
