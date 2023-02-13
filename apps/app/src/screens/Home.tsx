import { useState } from 'react';
import { Apod } from '@prisma/client';

import { Header } from 'components/Header/Header';
import { ApodCard } from 'components/ApodCard/ApodCard';
import { DatePickerNasapoint } from 'components/Header/DatePicker/DatePicker';

const TODAY = new Date();

export const Home = ({ initialApod }: { initialApod: Apod }) => {
  const [dateSelected, setDateSelected] = useState(new Date());
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-800">
      <div className="flex w-full flex-col items-center backdrop-blur-md">
        <Header>
          <DatePickerNasapoint dateSelected={dateSelected} setDateSelected={setDateSelected} today={TODAY} />
        </Header>
        <div className="flex min-h-screen w-full flex-row items-center ">
          <ApodCard initialApod={initialApod} dateSelected={dateSelected} />
        </div>
      </div>
    </div>
  );
};
