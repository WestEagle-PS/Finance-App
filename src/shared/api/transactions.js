import axios from 'axios';

const transactionsInstance = axios.create({
  baseURL: 'https://wallet.goit.ua/api',
});

export const getAllTransactions = () => {
  return transactionsInstance.get('/transactions');
};

export const addTransaction = data => {
  return transactionsInstance.post('/transactions', data);
};

export const deleteTransaction = id => {
  return transactionsInstance.delete(`/transactions/${id}`);
};

export const updateTranscation = id => {
  return transactionsInstance.patch('/transactions', { id });
};

export const getTransactionCategories = () => {
  return transactionsInstance.get('/transactions-categories')
};

export const getTransactionSummary = async() => {
  const data = await transactionsInstance.get('/transactions-summary');
  return data;
};
