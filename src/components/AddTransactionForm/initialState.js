import { toDateString } from "shared/utils/toDateString";

const initialState = {
  transactionDate: toDateString(new Date()),
  type: 'INCOME',
  categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
  comment: '',
  amount: '',
};

export default initialState;