import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import 'react-datepicker/dist/react-datepicker.css';

const AddTransactionCalendar = ({ onChange }) => {
  const startDate = new Date();
  return (
    <DatePicker
      showIcon
      selected={startDate}
      onChange={date => onChange(date.toDateString())}
      dateFormat="dd.MM.yyyy"
      maxDate={addDays(new Date(), 0)}
    />
  );
};

export default AddTransactionCalendar;
