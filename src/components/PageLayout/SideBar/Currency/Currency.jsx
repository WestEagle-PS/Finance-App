import { useState, useEffect } from 'react';

import { getMoney } from 'shared/api/currency';
import { ProgressBar } from 'react-loader-spinner';
import { ReactComponent as Icon } from 'images/svg/Vector 7.svg';
import styles from './Currency.module.scss';

const Currency = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('pending');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading('pending');
        const { data } = await getMoney();
        const newArr = data.slice(0, 2);
        console.log('newArr', newArr);
        await localStorage.set('currency', JSON.stringify(newArr));
        setState({ newArr });
        setLoading('loaded');
      } catch (response) {
        setError(`Can't get data from server. Please try again later.` || response.message);
        setLoading('reject');
      }
    };

    fetchData();
  }, []);

  // localStorage.set('currency', JSON.stringify(state));
  const elements = state.newArr?.map(item => {
    return (
      <li className={styles.item} key={item.currencyCodeA}>
        <p className={styles.heading}>{item.currencyCodeA === 840 ? 'USD' : 'EUR'}</p>
        <p className={styles.heading}>{item.rateBuy.toFixed(2)}</p>
        <p className={styles.heading}>{item.rateSell.toFixed(2)}</p>
      </li>
    );
  });

  return (
    <>
      {loading === 'pending' ? (
        <div className={`${styles.box} ${styles.boxLoader}`}>
          <div className={styles.upperBox}>
            <p className={styles.text}>Currency</p>
            <p className={styles.text}>Purchase</p>
            <p className={styles.text}>Sale</p>
          </div>
          <ProgressBar
            height="150px"
            width="300px"
            position="absolute"
            bottom="0"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass={styles.bar}
            borderColor="#F4442E"
            barColor="blue"
          />
          <Icon style={{ position: 'absolute', bottom: '0' }} />
        </div>
      ) : (
        <div className={styles.box}>
          <div className={styles.upperBox}>
            <p className={styles.text}>Currency</p>
            <p className={styles.text}>Purchase</p>
            <p className={styles.text}>Sale</p>
          </div>
          {elements?.length > 0 ? (
            <div className={styles.loverBox}>{elements}</div>
          ) : (
            <>{error && <p className={styles.currencyError}>{error}</p>}</>
          )}
          <Icon style={{ position: 'absolute', bottom: '0' }} />
        </div>
      )}
    </>
  );
};

export default Currency;
