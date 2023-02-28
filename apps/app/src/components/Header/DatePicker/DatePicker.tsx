import { MdOutlineCalendarToday as CalendarIcon, MdArrowBack, MdArrowForward, MdArrowRight } from 'react-icons/md';
import { Dispatch, forwardRef } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

type T = Date;

export const CustomInput = forwardRef(({ value, onClick }: { value?: string; onClick?: () => void }, ref: any) => (
  <div ref={ref}>
    <CalendarIcon className="hover:cursor-pointer" size={24} onClick={onClick} />
  </div>
));

export const DatePickerNasapoint = ({
  dateSelected,
  setDateSelected,
  today,
}: {
  dateSelected: Date;
  setDateSelected: Dispatch<T>;
  today: Date;
}) => {

  const handleBackDate = () => {
    const newDate = new Date(dateSelected.setDate(dateSelected.getDate() - 1));
    setDateSelected(newDate);
  };

  const handleNextDate = () => {
    const newDate = new Date(dateSelected.setDate(dateSelected.getDate() + 1));
    setDateSelected(newDate);
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <MdArrowBack size={18} className="hover:cursor-pointer mb-1" onClick={handleBackDate} />
      <DatePicker
        selected={dateSelected}
        onChange={setDateSelected}
        customInput={<CustomInput />}
        maxDate={today}
        className="z-20"
      />
      {dateSelected.getDate() === today.getDate() ? null : (
        <MdArrowForward size={18} className="hover:cursor-pointer mb-1" onClick={handleNextDate} />
      )}
    </div>
  );
};
