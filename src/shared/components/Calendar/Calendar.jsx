import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTransactionCalendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        showIcon
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
        // maxDate={addDays(new Date(), 5)}
        // placeholderText="Select a date before 5 days in the future"
      />
    );
  };

  export default AddTransactionCalendar;