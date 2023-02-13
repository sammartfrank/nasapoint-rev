import { ReactNode } from 'react';

export const Header = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container fixed flex flex-row justify-center text-white ">
      <div className="my-2 flex flex-row gap-4">
        <h1 className="font-mono text-base font-bold">Nasapoint</h1>
        {children}
      </div>
    </div>
  );
};
