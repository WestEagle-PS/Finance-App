import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/transaction/transaction-selectors';
import useForm from 'shared/hooks/useForm';
import ToggleButton from 'shared/components/ToggleButton/ToggleButton';
import Dropdown from 'shared/components/Dropdown/Dropdown';
import Button from 'shared/components/Button/Button';
import AddTransactionCalendar from 'shared/components/Calendar/Calendar';
import initialState from './initialState';
import styles from './add-transaction-form.module.scss';

const AddTransactionForm = ({ onSubmit }) => {
  const [checked, setChecked] = useState(true);
  const { state, handleChange, handleDataChange, handleSubmit } = useForm({ initialState, onSubmit });
  const { comment, amount } = state;
  const categories = useSelector(selectCategories);
  const options = categories.map(({ id,name }) => ({ label: name, value: id }));

  const handleChecked = data => {
    setChecked(data);
  };

  return (
    <>
      <p className={styles.title}>Add transaction</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <ToggleButton getChecked={handleChecked} onClick={handleDataChange} />
        {!checked && <Dropdown options={options} onChange={handleDataChange} />}
        <div className={styles.wrapper}>
          <input
            className={styles.field}
            name="amount"
            type="text"
            value={amount}
            placeholder="0.00"
            required
            onChange={handleChange}
          />
          <AddTransactionCalendar onChange={handleDataChange} />
        </div>
        <input
          className={styles.field}
          name="comment"
          type="text"
          value={comment}
          placeholder="Comment"
          onChange={handleChange}
        />
        <div className={styles.box}>
          <Button>Add</Button>
          <Button>Cancel</Button>
        </div>
      </form>
    </>
  );
};

export default AddTransactionForm;
