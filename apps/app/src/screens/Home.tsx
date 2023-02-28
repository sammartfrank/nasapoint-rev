import { useEffect, useState } from 'react';
import { Apod } from '@prisma/client';

import { Header } from 'components/Header/Header';
import { ApodCard } from 'components/ApodCard/ApodCard';
import { DatePickerNasapoint } from 'components/Header/DatePicker/DatePicker';
import { View, ViewSelector } from 'components/ViewSelector/ViewSelector';

export const Home = ({ listOfApods }: { listOfApods?: Apod[] }) => {
  const initialApod = listOfApods?.[0];

  const today = new Date();

  const [dateSelected, setDateSelected] = useState(today);
  const [fullScrolled, setFullScrolled] = useState(false);
  console.log('🚀 ~ fullScrolled', fullScrolled);
  const [viewSelected, setView] = useState<View>(View.Thumb);

  // on bottom of scrolling page, fetch more apods
  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setFullScrolled(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-zinc-800">
      <div className="flex w-full flex-col items-center backdrop-blur-md">
        <Header>
          {viewSelected === View.Thumb && (
            <DatePickerNasapoint dateSelected={dateSelected} setDateSelected={setDateSelected} today={today} />
          )}
          <ViewSelector view={viewSelected} setView={setView} />
        </Header>

        {viewSelected === View.Thumb && <ApodCard initialApod={initialApod} dateSelected={dateSelected} />}
        {viewSelected === View.List && (
          <div className="flex flex-col gap-4">
            {listOfApods?.map((apod) => (
              <ApodCard key={apod.id} initialApod={apod} dateSelected={new Date(apod.date)} />
            ))}
            {fullScrolled && <div className="text-white">Loading more...</div>}
          </div>
        )}
      </div>
    </div>
  );
};
