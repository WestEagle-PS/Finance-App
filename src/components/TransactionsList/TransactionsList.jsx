import TransactionsListItem from './TransactionsListItem/TransactionsListItem';
import data from '../TransactionsList/data.json';

import styles from './TransactionsList.module.scss';

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

    const element = data.map(item => (<TransactionsListItem
        key={item.id}
        category={item.category}
        sum={item.sum}
        date={item.date}
        type={item.type}
        comment={item.comment}/>));
  return (
    <div>
      <div className={styles.title}>
        <p>Date</p>
              <p>Type</p>
              <p>Category</p>
              <p>Comment</p>
              <p>Sum</p>
      </div>
      <div className={styles.list_box}>
        <ul className={styles.list}>{element}</ul>
      </div>
    </div>
  );
}

export default TransactionsList
