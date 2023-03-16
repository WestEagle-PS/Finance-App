import { useState, useEffect } from 'react';


import { getTransactionCategories } from 'shared/api/transactions';



const ChartStat = () => {
  const [state, setState] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
          const { data } = await getTransactionCategories();
        setState({ data });
      } catch (response) {
        setError(response.message || 'Oops something wrong');
      } finally {
      }
    };

    fetchData();
  }, []);




  return (
  <div></div>
  );
};

export default ChartStat;
