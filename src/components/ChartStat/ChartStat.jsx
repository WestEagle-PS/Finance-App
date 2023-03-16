import { useState, useEffect } from 'react';

import { getAllTransactions } from 'shared/api/transactions';
import { getTransactionCategories } from 'shared/api/transactions';
import { getTransactionSummary } from 'shared/api/transactions';


const ChartStat = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
          const { data } = await getTransactionSummary();
          console.log(data)
        // const newArr = data.slice(0, 2);
        setState({ data });
      } catch (response) {
        setError(response.message || 'Oops something wrong');
      } finally {
      }
    };

    fetchData();
  }, []);
//   if (!state.newArr) {
//     return;
//   }



  return (
  <div>CHART</div>
  );
};

export default ChartStat;
