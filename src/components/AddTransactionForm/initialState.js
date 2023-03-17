import { toDateString } from "shared/utils/toDateString";

const initialState = {
  transactionDate: toDateString(new Date()),
  type: 'INCOME',
  categoryId: '',
  comment: '',
  amount: '',
};

export default initialState;