import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from 'shared/api/transactions';

export const getTransactionSummary = createAsyncThunk(
    'summary/get',
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await api.getTransactionSummary();
        if(data.expenseSummary < 0) {
            data.expenseSummary = data.expenseSummary * -1;
        }
        return data;
      } catch ({ response }) {
        return rejectWithValue(response);
      }
    }
  );