import { useState, useEffect } from 'react';

import styles from './Currency.module.scss';
import { getMoney } from 'shared/api/currency';

const Currency = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
          const { data } = await getMoney();
        //   console.log(data)
        const newArr = data.slice(0, 2);
        setState({ newArr });
      } catch (response) {
        setError(response.message || 'Oops sothing wrong');
      } finally {
      }
    };

    fetchData();
  }, []);
    if (!state.newArr) {
      return
  }

  const elements = state.newArr.map(item => (
    <li className={styles.item} key={item.currencyCodeA}>
      <p className={styles.heading}>{item.currencyCodeA === 840 ? 'USD' : 'EUR'}</p>
      <p className={styles.heading}>{item.rateBuy.toFixed(2)}</p>
      <p className={styles.heading}>{item.rateSell.toFixed(2)}</p>
    </li>
  ));

  return (
      <div className={styles.box}>
           {error && <p>{error}</p>}
      <div className={styles.upperBox}>
        <p className={styles.text}>Currency</p>
        <p className={styles.text}>Purchase</p>
        <p className={styles.text}>Sale</p>
      </div>
      <div className={styles.loverBox}>{elements}</div>
    </div>
  );
};

export default Currency;
