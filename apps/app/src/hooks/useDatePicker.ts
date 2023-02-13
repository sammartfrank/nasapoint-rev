import { useEffect, useState } from 'react';

export const useDatePicker = () => {
  const [dateSelected, setDateSelected] = useState<Date>(new Date());

  const handleDatePicker = (e: Date): void => setDateSelected((prev) => e);

  const TODAY = new Date();

  useEffect(() => {
    console.log('🚀 ~ dateSelected', dateSelected);
  }, [dateSelected]);

  return {
    handleDatePicker,
    dateSelected,
    TODAY,
  };
};
