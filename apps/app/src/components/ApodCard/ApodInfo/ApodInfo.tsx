import { Apod } from '@prisma/client';
import { ActionButtons } from './ActionButtons';

export const ApodInfo = ({ apod }: { apod: Apod }) => {
  const { date, title, copyright, explanation } = apod;

  return (
    <div className="flex w-96 flex-col gap-y-6 text-white">
      <span className="text-base text-gray-500">{date}</span>
      <div className="flex flex-col gap-3">
        <h2 className="w-full text-2xl font-light underline">{title}</h2>
        <span className="text-base text-gray-500">{copyright}</span>
        <p className="text-justify font-mono text-sm font-extralight leading-4">{explanation}</p>
      </div>
      <ActionButtons />
    </div>
  );
};
