import { useState } from 'react';
import moment from 'moment';

import { Apod } from '@prisma/client';
import { Header } from 'components/Header/Header';
import { ApodCard } from 'components/ApodCard/ApodCard';

export const Home = ({ initialApod }: { initialApod: Apod }) => {
  const [dateSelected, setDateSelected] = useState(moment().format('YYYY-MM-DD'));

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen"
      style={{
        backgroundImage: initialApod?.media_type === 'image' ? `url(${initialApod.url})` : `none`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center w-full backdrop-blur-md">
        <Header dateSelected={dateSelected} setDateSelected={setDateSelected} />
        <div className="w-full">
          <div className="flex flex-row items-center w-full min-h-screen ">
            <ApodCard dateSelected={dateSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};
