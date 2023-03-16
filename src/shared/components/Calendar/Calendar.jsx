import { useState } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import 'react-datepicker/dist/react-datepicker.css';

const AddTransactionCalendar = ({ onChange }) => {
  const [startDate, setStartDate]= useState(new Date());
  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={date => {
        console.log(date)
        setStartDate(date)
        onChange({type: "date", data: date.toDateString()})}}
      dateFormat="dd.MM.yyyy"
      maxDate={addDays(new Date(), 0)}
    />
  );
};

export default AddTransactionCalendar;
