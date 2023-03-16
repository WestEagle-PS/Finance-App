import { createSlice } from '@reduxjs/toolkit';

import {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
  updateTranscation,
  getTransactionSummary,
  getAllCategories,
} from './transaction-operations';



const initialState = {
  items: [],
  loading: false,
  error: null,
  summary: {},
  categories: [],
};

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTransactions.pending, handlePending)
      .addCase(getAllTransactions.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(getAllTransactions.rejected, handleRejected)

      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addTransaction.rejected, handleRejected)

      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteTransaction.rejected, handleRejected)

      .addCase(updateTranscation.pending, handlePending)
      .addCase(updateTranscation.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map(transaction => (transaction.id === payload.id ? payload : transaction));
      })
      .addCase(updateTranscation.rejected, handleRejected)

      .addCase(getTransactionSummary.pending, handlePending)
      .addCase(getTransactionSummary.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.summary = payload;
      })
      .addCase(getTransactionSummary.rejected, handleRejected)
      .addCase(getAllCategories.pending, handlePending)
      .addCase(getAllCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.categories = payload;
      })
      .addCase(getAllCategories.rejected, handleRejected)
  },
});

export default transactionSlice.reducer;
