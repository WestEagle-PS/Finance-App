import instanceAuth from './auth';

export const getAllTransactions = () => instanceAuth.get('/transactions');

export const addTransaction = data => instanceAuth.post('/transactions', data);

export const deleteTransaction = id => instanceAuth.delete(`/transactions/${id}`);

export const updateTranscation = id => instanceAuth.patch('/transactions', { id });

export const getTransactionCategories = () => instanceAuth.get('/transaction-categories');

export const getTransactionSummary = () => instanceAuth.get('/transactions-summary');

