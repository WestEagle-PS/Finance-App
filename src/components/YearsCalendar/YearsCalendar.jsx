import DropdownCalendar from "shared/components/DropdownCalendar/DropdownCalendar";
import { options } from "./options";

const initialValue = { label: 'Select year', value: '' }
const yearsValue = options();

const YearsCalendar = () => {
    const handleChange = (value) => {
        console.log("year value", value);
    }

    return <DropdownCalendar options={yearsValue} startValue={initialValue} onChange={handleChange}/>
}

export default YearsCalendar;