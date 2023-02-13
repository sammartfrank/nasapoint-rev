import { ReactNode } from 'react';

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container fixed flex flex-row justify-center text-white ">
      <div className="flex flex-row gap-4 my-2">
        <h1 className="font-mono font-bold text-md">Nasapoint</h1>
        {children}
      </div>
    </div>
  );
};
