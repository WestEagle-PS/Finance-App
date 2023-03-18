import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategories } from 'redux/transaction/transaction-selectors';
import useForm from 'shared/hooks/useForm';
import ToggleButton from 'shared/components/ToggleButton/ToggleButton';
import Dropdown from 'shared/components/Dropdown/Dropdown';
import AddTransactionCalendar from 'shared/components/Calendar/Calendar';
import PrimaryButton from 'shared/components/PrimaryButton/PrimaryButton';
import SecondaryButton from 'shared/components/SecondaryButton/SecondaryButton';
import INITIAL_STATE from './initialState';
import calendarIcon from 'images/svg/calendary.svg';
import styles from './add-transaction-form.module.scss';

const AddTransactionForm = ({ initialState = INITIAL_STATE, isEdit = false, onSubmit, setShowModal }) => {
  const [checked, setChecked] = useState(true);
  const { state, handleChange, handleDataChange, handleSubmit } = useForm({ initialState, onSubmit });
  const categories = useSelector(selectCategories);
  const filteredCategories = categories.filter(item => item.id !== '063f1132-ba5d-42b4-951d-44011ca46262');
  const options = filteredCategories.map(({ id, name }) => ({ label: name, value: id }));

  const handleChecked = data => {
    setChecked(data);
  };

  const handleCancelBtnClick = () => {
    setShowModal(false);
  };

  const { transactionDate, type, comment, amount } = state;
  const income = type === 'INCOME' ? styles.income : styles.type;
  const expense = type === 'EXPENSE' ? styles.expense : styles.type;

  return (
    <>
      <p className={styles.title}>Add transaction</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        {isEdit ? (
          <p className={styles.type}>
            <span className={income}>Income</span> / <span className={expense}>Expense</span>
          </p>
        ) : (
          <>
            <ToggleButton getChecked={handleChecked} onClick={handleDataChange} />
            {!checked && <Dropdown options={options} onChange={handleDataChange} />}
          </>
        )}
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
          {isEdit ? (
            <div className={styles.inputBox}>
            <img className={styles.icon} src={calendarIcon} alt="Calendar icon" />
            <input className={styles.field} name="transactionDate" type="text" value={transactionDate} disabled />
            </div>
          ) : (
            <AddTransactionCalendar stateDate={transactionDate} onChange={handleDataChange} />
          )}
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
          <PrimaryButton>{isEdit ? 'Save' : 'Add'}</PrimaryButton>
          <SecondaryButton onBtnClick={handleCancelBtnClick}>Cancel</SecondaryButton>
        </div>
      </form>
    </>
  );
};

export default AddTransactionForm;
