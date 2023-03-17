import instanceAuth from './auth';

export const getAllTransactions = async () => instanceAuth.get('/transactions');

export const addTransaction = data => instanceAuth.post('/transactions', data);

export const deleteTransaction = id => instanceAuth.delete(`/transactions/${id}`);

export const updateTranscation = async(id, data) => {
  // console.log("id", id);
  // console.log("data", data)
  const result = await instanceAuth.patch(`/transactions/${id}`, { data })
  return result;
};

export const getTransactionCategories = async () => {
  const data = await instanceAuth.get('/transaction-categories');
  return data.data;
};

export const getTransactionSummary = () => instanceAuth.get('/transactions-summary');
