import { useSelector } from 'react-redux';
import { selectBalance } from 'redux/transaction/transaction-selectors';
// import { selectPeriodTotal } from 'redux/summary/summary-selectors';
// import { selectAllTransactions } from 'redux/transaction/transaction-selectors';
import s from './Balance.module.scss';

const Balance = () => {
  const totalBalance = useSelector(selectBalance);
  // const totalBalance = useSelector(selectPeriodTotal)
//   const data = useSelector(selectAllTransactions);
//   const totalBalance = data.reduce((_, el) => el.balanceAfter, 0);

  return (
    <div className={s.balance}>
      <div className={s.balanceTitle}>Your balance</div>
      <div className={s.balanceValue}>&#8372; {totalBalance.toLocaleString().replaceAll(",",".") || 0}</div>
    </div>
  );
};

export default Balance;
