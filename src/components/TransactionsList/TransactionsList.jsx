import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTransaction, updateTranscation } from 'redux/transaction/transaction-operations';
import { selectAllTransactions, selectCategories } from 'redux/transaction/transaction-selectors';
import TransactionsListItem from './TransactionsListItem/TransactionsListItem';
import Modal from 'shared/components/Modal/Modal';
import AddTransactionForm from 'components/AddTransactionForm/AddTransactionForm';
// import data from '../TransactionsList/data.json';
import wallet from '../../images/wallett.png'
import styles from './TransactionsList.module.scss';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

// const TransactionList = () => {
//   const element = data.map(item => (
//     <TransactionsListItem
//       key={item.id}
//       category={item.category}
//       sum={item.sum}
//       date={item.date}
//       type={item.type}
//       comment={item.comment}
//     />
//   ));
//   return (
//     <div className={styles.box}>
//       <table className={styles.table}>
//         <thead className={styles.thead}>
//           <tr>
//             <th className={styles.date}>Date</th>
//             <th className={styles.type}>Type</th>
//             <th className={styles.category}>Category</th>
//             <th className={styles.comment}>Comment</th>
//             <th className={styles.sum}>Sum</th>

//           </tr>
//         </thead>
//         <tbody className={styles.tbody}>{element}</tbody>
//       </table>
//     </div>
//   );
// };

// export default TransactionList;

const TransactionsList = () => {
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

  console.log("transactions", transactions)

  const element = transactions.map(({ id, transactionDate, type, categoryId, comment, amount }) => {
    const categoryName = categories.find(item => item.id === categoryId);
    if(amount < 0) {
      amount = amount * -1
    }

    return (
      <TransactionsListItem
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

  const whatToShow = transactions.length ===0?<div className={styles.boxNotFound}>
    <p className={styles.titleText}>No Transactions yet</p>
    <p className={styles.textLover}>Start transactions with your wallet.All transactions made will be displayed here.</p>
        <img src={wallet} alt="no transaction" className={styles.img} />
      </div> : <div>
      <div className={styles.title}>
        <p>Date</p>
        <p>Type</p>
        <p>Category</p>
        <p>Comment</p>
        <p>Sum</p>
      </div>
    <SimpleBar style={{ maxHeight: 450 }}> <div className={styles.list_box}>
        <ul className={styles.list}>{element}</ul>
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
      </div></SimpleBar>
    </div>
  return (
 <>  {whatToShow}</>
  );
};

export default TransactionsList;

