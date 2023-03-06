import { ReactNode } from 'react';

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container flex flex-row justify-center text-white z-10 mx-auto">
      <div className="my-2 flex flex-row gap-4 w-full justify-between">
        <div />
        {children}
      </div>
    </div>
  );
};
