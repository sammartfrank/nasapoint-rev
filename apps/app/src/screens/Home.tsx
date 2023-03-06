import { useEffect, useState } from 'react';
import { Apod } from '@prisma/client';

import { Header } from 'components/Header/Header';
import { ApodCard } from 'components/ApodCard/ApodCard';
import { DatePickerNasapoint } from 'components/Header/DatePicker/DatePicker';
import { View, ViewSelector } from 'components/ViewSelector/ViewSelector';
import { useApodByDate } from 'hooks/useApodByDate';
import { LoadingScreen } from 'components/LoadingScreen/LoadingScreen';

export const Home = ({ listOfApods }: { listOfApods: Apod[] }) => {
  const todayInitialDateType = new Date().toISOString().split('T')[0];

  const [dateSelected, setDateSelected] = useState(todayInitialDateType);

  const { apodByDate, isLoading } = useApodByDate(dateSelected);

  const [fullScrolled, setFullScrolled] = useState(false);
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

  // Loading screen
  if (isLoading || !apodByDate) return <LoadingScreen />;
  return (
        <div className="flex w-full min-h-screen  flex-col bg-zinc-800 scrollbar-hide">
    <Header>
        {viewSelected === View.Thumb && (
          <DatePickerNasapoint dateSelected={dateSelected} setDateSelected={setDateSelected} />
        )}
        <ViewSelector view={viewSelected} setView={setView} />
      </Header>

      {/* Thumbnail */}
      {viewSelected === View.Thumb && (
        <div className="flex h-full w-full flex-col bg-zinc-800">
          <div className="container mx-auto"> 
            <ApodCard apod={apodByDate} />
          </div>
        </div>
      )}

      {/* List */}
      {viewSelected === View.List && (
        <div className="container flex flex-col gap-4">
          {listOfApods?.map((apod) => (
            <ApodCard key={apod.id} apod={apod} />
          ))}
        </div>
      )}
    </div>
  );
};
