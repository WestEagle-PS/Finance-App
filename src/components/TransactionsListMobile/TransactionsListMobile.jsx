import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction, updateTranscation } from 'redux/transaction/transaction-operations';
import { selectAllTransactions, selectCategories } from 'redux/transaction/transaction-selectors';
import Modal from 'shared/components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';

// import styles from './TransactionsListMobile.module.scss';
import TransactionsListMobileItem from './TransactionsListMobileItem/TransactionsListMobileItem';

const TransactionListMobile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [transaction, setTransaction] = useState('');
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const transactions = useSelector(selectAllTransactions);
  const categories = useSelector(selectCategories);

  const handleEditBtnClick = id => {
    setIsEdit(true);
    const transaction = transactions.find(item => item.id === id);
    setTransaction(transaction);
    setShowModal(true);
  };

  const handleDeleteBtnClick = id => {
    dispatch(deleteTransaction(id));
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  const onAddFormSubmit = data => {
    dispatch(updateTranscation(data));
    setShowModal(false);
  };

  const transactionsCopy = [...transactions];

  transactionsCopy.sort((a, b) => {
    const dateA = new Date(a.transactionDate);
    const dateB = new Date(b.transactionDate);
    return dateB.getTime() - dateA.getTime();
  });

  const element = transactionsCopy.map(({ id, transactionDate, type, categoryId, comment, amount }) => {
    const categoryName = categories.find(item => item.id === categoryId);

    return (
      <TransactionsListMobileItem
        key={id}
        id={id}
        category={categoryName.name}
        sum={amount}
        date={transactionDate}
        type={type}
        comment={comment}
        onEditBtnClick={handleEditBtnClick}
        onDeleteBtnClick={handleDeleteBtnClick}
      />
    );
  });

  return (
    <>
      {' '}
      {element}
      {showModal && (
        <Modal onClose={onCloseModal}>
          <AddTransactionForm
            initialState={transaction}
            isEdit={isEdit}
            onSubmit={onAddFormSubmit}
            setShowModal={setShowModal}
          />
        </Modal>
      )}{' '}
    </>
  );
};
export default TransactionListMobile;
