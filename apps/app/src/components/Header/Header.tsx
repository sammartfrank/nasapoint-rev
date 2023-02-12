import { MdCalendarToday as CalendarIcon } from 'react-icons/md';
import moment from 'moment';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

export const Header = ({ dateSelected, setDateSelected }: { dateSelected: string; setDateSelected: any }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleOnShowDatePicker = () => setShowDatePicker(!showDatePicker);

  const handleDatePicker = (e: Date) => setDateSelected(moment(e).format('YYYY-MM-DD'));
  const datePickerValue = new Date(`${dateSelected}T00:00:00.000Z`);
  datePickerValue.setDate(datePickerValue.getDate() + 1);

  return (
    <div className="container fixed flex flex-row justify-center text-white ">
      <div className="flex flex-row gap-4 my-2">
        <h1 className="font-mono font-bold text-md">Nasapoint</h1>
        <CalendarIcon size={24} className="hover:cursor-pointer" onClick={handleOnShowDatePicker} />
        <DatePicker
          selected={datePickerValue}
          onChange={handleDatePicker}
          dateFormat="dd/MM/yyyy"
          className={`px-2 text-white font-semibold font-mono rounded-lg bg-transparent z-10 ${
            showDatePicker ? 'visible' : 'invisible'
          }`}
        />
      </div>
    </div>
  );
};
