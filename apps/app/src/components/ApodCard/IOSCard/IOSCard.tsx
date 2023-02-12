import { Dots } from 'components/ApodCard/IOSCard/Dots/Dots';

export const IOSCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`flex flex-col rounded-lg bg-zinc-800 ${className}`}>
      <div className="w-full h-[20px] bg-zinc-500 rounded-t-lg">
        <Dots />
      </div>
      {children}
    </div>
  );
};
