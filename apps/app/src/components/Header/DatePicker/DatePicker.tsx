import { MdOutlineCalendarToday as CalendarIcon, MdArrowBack, MdArrowForward, MdArrowRight } from 'react-icons/md';
import { Dispatch, forwardRef } from 'react';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { parseDate } from 'utils/dateUtils';

type T = string;

export const CustomInput = forwardRef(({ value, onClick }: { value?: string; onClick?: () => void }, ref: any) => (
  <div ref={ref}>
    <CalendarIcon className="hover:cursor-pointer" size={24} onClick={onClick} />
  </div>
));

CustomInput.displayName = 'CustomInput';

export const DatePickerNasapoint = ({
  dateSelected,
  setDateSelected,
}: {
  dateSelected: string;
  setDateSelected: Dispatch<T>;
}) => {
  const datePickerDateSelectedFormatted = parseDate(dateSelected);
  const today = parseDate(new Date());

  const handleBackDate = () => {
    const newDate = new Date(dateSelected);
    newDate.setDate(newDate.getDate() - 1);
    return setDateSelected(parseDate(newDate));
  };

  const handleNextDate = () => {
    const newDate = new Date(dateSelected);
    newDate.setDate(newDate.getDate() + 1);
    return setDateSelected(parseDate(newDate));
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <MdArrowBack size={18} className="mb-1 hover:cursor-pointer" onClick={handleBackDate} />
      <DatePicker
        onChange={(date) => setDateSelected(parseDate(date ?? new Date()))}
        customInput={<CustomInput />}
        maxDate={new Date()}
        className="z-20"
      />
      {datePickerDateSelectedFormatted === today ? null : (
        <MdArrowForward size={18} className="mb-1 hover:cursor-pointer" onClick={handleNextDate} />
      )}
    </div>
  );
};
