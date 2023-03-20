import PropTypes from 'prop-types';
import EditButton from 'shared/components/EditButton/EditButton';
import DeleteButton from 'shared/components/DeleteButton/DeleteButton';

import styles from './TransactionsListItem.module.scss';

// const TransactionsListItem = ({ category, sum, date, type, comment }) => {
//   const typeOfTrans = type === 'income' ? '+' : '-';
//   return (
//     <tr>
//       <td>{date}</td>
//       <td>{typeOfTrans}</td>
//       <td>{category}</td>
//       <td className={styles.tdComment}>{comment}</td>
//       <td>{sum}</td>
//       <td>
//         <img src={svg} alt="Edit" className={styles.svg} />

//         <button className={styles.btn}>Delete</button>
//       </td>
//     </tr>
//   );
// };

// export default TransactionsListItem;

const TransactionsListItem = ({ id, category, sum, date, type, comment, onEditBtnClick, onDeleteBtnClick }) => {
  const newSum = sum.toFixed(2);
  const typeOfTrans = type === 'INCOME' ? '+' : '-';
  const Newdate = new Date(date);
  const day = Newdate.getDate().toString().padStart(2, '0');
  const month = (Newdate.getMonth() + 1).toString().padStart(2, '0');
  const year = Newdate.getFullYear().toString().slice(-2);
  const formattedDate = `${day}.${month}.${year}`;
  return (
    <li className={styles.item}>
      <div className={styles.leftBox}>
        <p className={styles.date}>{formattedDate}</p>
        <p className={styles.type}>{typeOfTrans}</p>
        <p className={styles.category}> {category?.name ? category.name : 'Unknown'}</p>

        <span className={styles.comment}>{comment}</span>
        <span className={typeOfTrans === '+' ? styles.greenSum : styles.redSum}>{newSum}</span>
      </div>
      <div className={styles.rightBox}>
        <EditButton onClick={() => onEditBtnClick(id)} />
        <DeleteButton onClick={() => onDeleteBtnClick(id)} />
      </div>
    </li>
  );
};

export default TransactionsListItem;

TransactionsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  sum: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  onEditBtnClick: PropTypes.func.isRequired,
  onDeleteBtnClick: PropTypes.func.isRequired,
}