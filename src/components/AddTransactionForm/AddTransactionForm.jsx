import useForm from 'shared/hooks/useForm';
import Button from 'shared/components/Button/Button';
import AddTransactionCalendar from 'shared/components/Calendar/Calendar';
import initialState from './initialState';
import styles from './add-transaction-form.module.scss'

const AddTransactionForm = ({ onSubmit }) => {
  const { state, handleChange, handleDateChange, handleSubmit } = useForm({ initialState, onSubmit });

//   const calendarChange = (data) => {
//     console.log('data', data)
//   }
  const { comment, amount } = state;
// type, categoryId

  return (
    <>
      <p>Add transaction</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input name="amount" type="text" value={amount} placeholder="0.00" required onChange={handleChange} />
        <AddTransactionCalendar onChange={handleDateChange}/>
        <input name="comment" type="text" value={comment} placeholder="Comment" onChange={handleChange} />
        <Button>Add</Button>
        <Button>Cancel</Button>
      </form>
    </>
  );
};

export default AddTransactionForm;
