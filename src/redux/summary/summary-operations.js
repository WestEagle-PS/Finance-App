import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from 'shared/api/transactions';

export const getTransactionSummary = createAsyncThunk(
    'summary/get',
    async ({month, year}, { rejectWithValue }) => {
      try {
        const { data } = await api.getTransactionSummary({month, year});
        if(data.expenseSummary < 0) {
            data.expenseSummary = data.expenseSummary * -1;
        }
        return data;
      } catch ({ response }) {
        return rejectWithValue(response);
      }
    }
  );