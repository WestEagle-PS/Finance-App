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

// const getTransactionCategories = () => {};

export const getTransactionSummary = () => {
  return transactionsInstance.get('/transactions-summary');
};
