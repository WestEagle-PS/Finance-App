import styles from './TransactionsListMobile.module.scss';
import data from '../TransactionsList/data.json';
import TransactionsListMobileItem from './TransactionsListMobileItem/TransactionsListMobileItem';

const TransactionListMobile = () => {
  const element = data.map(item => (
    <TransactionsListMobileItem
      key={item.id}
      category={item.category}
      sum={item.sum}
      date={item.date}
      type={item.type}
      comment={item.comment}
    />
  ));

  return (
    
          
      
     <div className={styles.box}>{element}</div>
  );
};
export default TransactionListMobile;
