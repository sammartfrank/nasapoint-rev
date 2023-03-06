import { Apod } from '@prisma/client';
import { ActionButtons } from './ActionButtons';
import { motion } from 'framer-motion';

export const ApodInfo = ({ apod }: { apod?: Apod }) => {
  const { date, title, copyright, explanation } = apod ?? {};
  const newDateFormat = date?.split('-').reverse().join('/');

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -500,
        speed: 0.5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="flex w-96 flex-col gap-y-6 text-white md:mx-5 md:my-0 m-5"
    >
      <span className="text-base text-gray-500">{newDateFormat}</span>
      <div className="flex flex-col gap-6">
        <h2 className="w-full text-2xl font-light hover:underline">{title}</h2>
        <span className="text-base text-gray-500">{copyright}</span>
        <p className="text-justify h-[450px] font-mono text-sm font-extralight overflow-auto scrollbar-hide  leading-relaxed hover:cursor-context-menu">
          {explanation}
        </p>
        <ActionButtons />
      </div>
    </motion.div>
  );
};
