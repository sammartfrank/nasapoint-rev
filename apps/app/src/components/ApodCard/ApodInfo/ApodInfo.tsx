import { Apod } from '@prisma/client';
import { ActionButtons } from './ActionButtons';

export const ApodInfo = ({ apod }: { apod: Apod }) => {
  const { date, title, copyright, explanation } = apod;

  return (
    <div className="flex flex-col text-white gap-y-6 w-96">
      <span className="text-gray-500 text-md">{date}</span>
      <div className="flex flex-col gap-3">
        <h2 className="w-full text-2xl font-light underline">{title}</h2>
        <span className="text-gray-500 text-md">{copyright}</span>
        <p className="font-mono text-sm leading-4 text-justify font-extralight">{explanation}</p>
      </div>
      <ActionButtons />
    </div>
  );
};
