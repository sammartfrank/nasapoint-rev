import { ReactNode } from 'react';

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container z-10 mx-auto flex flex-row justify-center text-white">
      <div className="my-2 flex w-full flex-row justify-between gap-4">
        <div />
        {children}
      </div>
    </div>
  );
};
