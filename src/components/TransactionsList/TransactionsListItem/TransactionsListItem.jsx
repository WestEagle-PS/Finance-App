import svg from '../../../images/svg/edit-02.svg';

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

const TransactionsListItem = ({category,sum,date,type,comment}) => {
    const typeOfTrans = type==="income"? "+":"-"
    return (
    <li className={styles.item}>
            <div className={styles.leftBox}>
                 <p className={styles.date}>{date}</p>
            <p className={styles.type}>{typeOfTrans}</p>
            <p className={styles.category}>{category}</p>
            <p className={styles.comment}>{comment}</p>
            <span className={styles.sum}>{sum}</span>
           </div>
            <div className={styles.rightBox}>
                 <img src={svg} alt=""className={styles.svg} />
            <button className={styles.btn}>Delete</button>
           </div>
    </li>
  );
}

export default TransactionsListItem
