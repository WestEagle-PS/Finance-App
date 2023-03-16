import { createSlice } from '@reduxjs/toolkit';

import {
  getAllTransactions,
  addTransaction,
  deleteTransaction,
  updateTranscation,
  getTransactionSummary,
} from 'shared/api/transactions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTransactions.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTransactions.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(getAllTransactions.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(addTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items.push(payload);
      })
      .addCase(addTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(deleteTransaction.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      .addCase(updateTranscation.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTranscation.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.map(transaction => (transaction.id === payload.id ? payload : transaction));
      })
      .addCase(updateTranscation.rejected, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = payload;
      })

      .addCase(getTransactionSummary.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionSummary.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items = payload;
      })
      .addCase(getTransactionSummary.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default transactionSlice.reducer;
