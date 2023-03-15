import s from './Balance.module.scss';

const Balance = () => {
  return (
    <div className={s.balance}>
      <div className={s.balanceTitle}>Your balance</div>
      <div className={s.balanceValue}>₴ 24 000.00</div>
    </div>
  );
};

export default Balance;
