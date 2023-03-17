import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTransaction, getAllCategories, getAllTransactions } from 'redux/transaction/transaction-operations';
import AddButton from 'shared/components/AddButton/AddButton';
import EditButton from 'shared/components/EditButton/EditButton';
import Modal from 'shared/components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
import css from './home-page.module.scss';
import { selectAllTransactions, selectCategories } from 'redux/transaction/transaction-selectors';
import DeleteButton from 'shared/components/DeleteButton/DeleteButton';
import TransactionsList from 'components/TransactionsList/TransactionsList';

const HomePage = () => {


  const [isEdit, setIsEdit] = useState(false);
  const [transaction, setTransaction] = useState('');

  const TransactionList = ({ setTransaction, setIsEdit, setShowModal }) => {
    const transactions = useSelector(selectAllTransactions);
    const categories = useSelector(selectCategories);

    const handleEditBtnClick = id => {
      setIsEdit(true);
      const transaction = transactions.find(item => item.id === id);
      setTransaction(transaction);
      setShowModal(true);
    };

    const elements = transactions.map(({ id, transactionDate, type, categoryId, comment, amount }) => {
      const category = categories.find(item => item.id === categoryId);
      return (
        <li key={id}>
          <span>{transactionDate}</span>
          <span>{type === 'INCOME' ? '+' : '-'}</span>
          <span>{category.name}</span>
          <span>{comment}</span>
          <span>{amount}</span>
          <EditButton id={id} onClick={handleEditBtnClick} />
          <DeleteButton />
        </li>
      );
    });

    return <ul>{elements}</ul>;
  };




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
      <p>Home page</p>
      <TransactionList setTransaction={setTransaction} setIsEdit={setIsEdit} setShowModal={setShowModal} />
      <AddButton type="button" onBtnClick={handleAddBtnClick} />
      <TransactionsList />
      {showModal && (
        <Modal onClose={onCloseModal}>
          <AddTransactionForm
            initialState={transaction}
            isEdit={isEdit}
            onSubmit={onAddFormSubmit}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
