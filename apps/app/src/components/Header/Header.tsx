import { useState } from 'react';
import { MdCalendarToday as CalendarIcon } from 'react-icons/md';
import moment from 'moment';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const Header = ({ dateSelected, setDateSelected }: { dateSelected: string; setDateSelected: any }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleOnShowDatePicker = () => setShowDatePicker(!showDatePicker);

  const handleDatePicker = (e: Date): void => setDateSelected(moment(e).format('YYYY-MM-DD'));
  const DATEPICKER_VALUE = new Date(`${dateSelected}T00:00:00.000Z`);
  DATEPICKER_VALUE.setDate(DATEPICKER_VALUE.getDate() + 1);
  const TODAY = moment().toDate();
  return (
    <div className="container fixed flex flex-row justify-center text-white ">
      <div className="flex flex-row gap-4 my-2">
        <h1 className="font-mono font-bold text-md">Nasapoint</h1>
        <DatePicker
          selected={DATEPICKER_VALUE}
          onChange={handleDatePicker}
          dateFormat="dd/MM/yyyy"
          customInput={<CalendarIcon size={24} className="w-12 hover:cursor-pointer" onClick={handleOnShowDatePicker} />}
          maxDate={TODAY}
        />
      </div>
    </div>
  );
};
