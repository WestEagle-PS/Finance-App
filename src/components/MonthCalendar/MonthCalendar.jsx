import { useDispatch } from 'react-redux';
import { getTransactionSummary } from 'redux/summary/summary-operations';
import DropdownCalendar from 'shared/components/DropdownCalendar/DropdownCalendar';
import { options } from './options';

export const month = new Date().getMonth();
const monthName = options[month].label
const initialValue = { label: monthName, value: month + 1 };

const MonthCalendar = () => {
  const dispatch = useDispatch();

  const handleChange = value => {
    dispatch(getTransactionSummary({month: value}))
  };

  return <DropdownCalendar options={options} startValue={initialValue} onChange={handleChange} />;
};

export default MonthCalendar;
