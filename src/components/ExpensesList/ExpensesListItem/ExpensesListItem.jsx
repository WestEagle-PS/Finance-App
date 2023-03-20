import PropTypes from 'prop-types';
import styles from './ExpensesListItem.module.scss';

const ExpensesListItem = ({ category, sum, color }) => {
  return (
    <li className={styles.item}>
      <div className={styles.box}>
        <span className={styles.block} style={{ backgroundColor: color }}></span>
        <p className={styles.category}>{category}</p>
      </div>
      <span className={styles.sum}>{sum.toLocaleString().replaceAll(",",".")}</span>
    </li>
  );
};
export default ExpensesListItem;

ExpensesListItem.propTypes = {
  category: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
