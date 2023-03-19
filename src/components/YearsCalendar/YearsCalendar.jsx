import { useDispatch } from 'react-redux';
import { getTransactionSummary } from 'redux/summary/summary-operations';
import DropdownCalendar from 'shared/components/DropdownCalendar/DropdownCalendar';
import { options } from './options';

export const year = new Date().getFullYear();
const initialValue = { label: year, value: year };
const yearsValue = options();

const YearsCalendar = (value) => {
  const dispatch = useDispatch({year: value});

  const handleChange = value => {
    dispatch(getTransactionSummary({year: value}))
  };

  return <DropdownCalendar options={yearsValue} startValue={initialValue} onChange={handleChange} />;
};

export default YearsCalendar;
