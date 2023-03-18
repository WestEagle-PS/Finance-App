import DropdownCalendar from 'shared/components/DropdownCalendar/DropdownCalendar';
import { options } from './options';

const initialValue = { label: 'Select month', value: '' };

const MonthCalendar = () => {
  const handleChange = value => {
    console.log('month value', value);
  };

  return <DropdownCalendar options={options} startValue={initialValue} onChange={handleChange} />;
};

export default MonthCalendar;
