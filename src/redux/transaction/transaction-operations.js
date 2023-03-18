import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'shared/api/transactions';

export const getAllTransactions = createAsyncThunk('transaction/get', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.getAllTransactions();
    const result = data.map(item => {
      if(item.amount < 0) {
        item.amount = item.amount * -1;
      }
      return item;
    })
    return result;
  } catch ({ response }) {
    return rejectWithValue(response);
  }
});

export const addTransaction = createAsyncThunk('transaction/add', async (data, { rejectWithValue }) => {
  try {
    if (data.type === 'EXPENSE') {
      data.amount = '-' + data.amount;
    }
    const { data: result } = await api.addTransaction(data);
    if(result.amount < 0) {
      result.amount = result.amount * -1;
    }
    return result;
  } catch ({ response }) {
    return rejectWithValue(response);
  }
});

export const deleteTransaction = createAsyncThunk('transaction/del', async (id, { rejectWithValue }) => {
  try {
    await api.deleteTransaction(id);
    return id;
  } catch ({ response }) {
    return rejectWithValue(response);
  }
});

export const updateTranscation = createAsyncThunk('transaction/update', async (transaction, { rejectWithValue }) => {
  try {
    const id = transaction.id;
    const data = {
      transactionDate: transaction.transactionDate,
      type: transaction.type,
      categoryId: transaction.categoryId,
      comment: transaction.comment,
      amount: Number(transaction.amount),
    };
    if (data.type === 'EXPENSE') {
      data.amount = Number('-' + data.amount)
    }
    const { data: result } = await api.updateTranscation(id, data);
    if(result.amount < 0) {
      result.amount = result.amount * -1;
    }
    return result;
  } catch ({ response }) {
    return rejectWithValue(response);
  }
});

export const getTransactionSummary = createAsyncThunk(
  'transaction/patchTransaction',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getTransactionSummary();
      return data;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);

export const getAllCategories = createAsyncThunk('transaction/getAllCategories', async (_, { rejectWithValue }) => {
  try {
    const data = await api.getTransactionCategories();
    return data;
  } catch ({ response }) {
    return rejectWithValue(response);
  }
});
