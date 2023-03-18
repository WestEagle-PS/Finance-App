import { useSelector } from 'react-redux';
import { selectAllTransactions } from 'redux/transaction/transaction-selectors';
import s from './Balance.module.scss';

const Balance = () => {
  const data = useSelector(selectAllTransactions);
  const totalBalance = data.reduce((_, el) => el.balanceAfter, 0);

  return (
    <div className={s.balance}>
      <div className={s.balanceTitle}>Your balance</div>
      <div className={s.balanceValue}>&#8372; {totalBalance || 0}</div>
    </div>
  );
};

export default Balance;
