import useForm from 'shared/hooks/useForm';
import Button from 'shared/components/Button/Button';
import AddTransactionCalendar from 'shared/components/Calendar/Calendar';
import initialState from './initialState';

const AddTransactionForm = ({ onSubmit }) => {
  const { state, setState, handleChange, handleSubmit } = useForm({ initialState, onSubmit });

  const { transactionDate, type, categoryId, comment, amount } = state;

  return (
    <>
      <p>Add transaction</p>
      <form onSubmit={handleSubmit}>
        <input name="amount" type="text" value={amount} placeholder="0.00" required onChange={handleChange} />
        <AddTransactionCalendar />
        <input name="comment" type="text" value={comment} placeholder="Comment" required />
        <Button>Add</Button>
        <Button>Cancel</Button>
      </form>
    </>
  );
};

export default AddTransactionForm;
