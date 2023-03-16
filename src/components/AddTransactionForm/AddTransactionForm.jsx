import { useState } from 'react';
import useForm from 'shared/hooks/useForm';
import ToggleButton from 'shared/components/ToggleButton/ToggleButton';
import Button from 'shared/components/Button/Button';
import AddTransactionCalendar from 'shared/components/Calendar/Calendar';
import initialState from './initialState';
import css from './add-transaction-form.module.scss'
// import styles from '../../shared/components/ToggleButton/toggle-button.module.css';


const AddTransactionForm = ({ onSubmit }) => {
  const [checked, setChecked] = useState(false);
  const { state, handleChange, handleDataChange, handleSubmit } = useForm({ initialState, onSubmit });
  // const labelClasses = checked
  // ? `${styles.switch} ${styles.checked}`
  // : styles.switch;
  const { comment, amount } = state;
// type, categoryId
console.log('checked', checked)

  return (
    <>
      <p>Add transaction</p>
      <form onSubmit={handleSubmit} className={css.form}>
      {/* <div className={styles.wrapper}>
      <label className={labelClasses}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={checked}
          onChange={({target}) => handleChange(target.checked)}
        />
        <span className={styles.slider + ' ' + styles.round}></span>
      </label>
    </div> */}
    <ToggleButton cheked={checked} setChecked={()=>setChecked()}  onClick={handleDataChange}/>
        <input name="amount" type="text" value={amount} placeholder="0.00" required onChange={handleChange} />
        <AddTransactionCalendar onChange={handleDataChange}/>
        <input name="comment" type="text" value={comment} placeholder="Comment" onChange={handleChange} />
        <Button>Add</Button>
        <Button>Cancel</Button>
      </form>
    </>
  );
};

export default AddTransactionForm;
