import styles from './TransactionsListMobileItem.module.scss';
import svg from '../../../images/svg/edit-02.svg';

const TransactionsListMobileItem = ({ category, sum, date, type, comment }) => {
  const typeOfTrans = type === 'income' ? '+' : '-';
  return (
    
    
      <table className={styles.table}>
          <tbody className={styles.tbody}>
          

<tr className={styles.part}>
        <td className={styles.pointFirst}></td>
        <td className={styles.head}>Date</td>
        <td className={styles.body}>{date}</td>
      </tr>
      <tr>
        <td className={styles.point}></td>
        <td className={styles.head}>Type</td>
        <td className={styles.body}>{typeOfTrans}</td>
      </tr>
      <tr>
        <td className={styles.point}></td>
        <td className={styles.head}>Category</td>
        <td className={styles.body}>{category}</td>
      </tr>
      <tr>
        <td className={styles.point}></td>
        <td className={styles.head}>Comment</td>
        <td className={styles.body}>{comment}</td>
      </tr>
      <tr>
        <td className={styles.point}></td>
        <td className={styles.head}>Sum</td>
        <td className={styles.body}>{sum}</td>
      </tr>

      <tr>
        <td className={styles.pointLast}></td>
        <td className={styles.head}>
          <button className={styles.btn}>Delete</button>
        </td>
        <td className={styles.body}>
          <img src={svg} alt="Edit" className={styles.svg} />
          <span> Edit</span>
        </td>
      </tr>
      </tbody>
      </table>
    
    
  );
};

export default TransactionsListMobileItem;


