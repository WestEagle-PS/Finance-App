import { useState } from 'react';
import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './calendar.module.scss'

const AddTransactionCalendar = ({ onChange }) => {
  const [startDate, setStartDate]= useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.field} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={date => {
        console.log(date)
        setStartDate(date)
        onChange({type: "date", data: date.toDateString()})}}
        customInput={<CustomInput />}
      dateFormat="dd.MM.yyyy"
      maxDate={addDays(new Date(), 0)}
    />
  );
};

export default AddTransactionCalendar;
