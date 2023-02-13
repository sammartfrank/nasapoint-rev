import { MdOutlineCalendarToday as CalendarIcon } from 'react-icons/md';
import { Dispatch } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

type T = Date;

export const DatePickerNasapoint = ({
  dateSelected,
  setDateSelected,
  today,
}: {
  dateSelected: Date;
  setDateSelected: Dispatch<T>;
  today: Date;
}) => {
  return (
    <DatePicker
      selected={dateSelected}
      onChange={setDateSelected}
      customInput={<CalendarIcon size={24} className="w-12 hover:cursor-pointer" />}
      maxDate={today}
    />
  );
};
