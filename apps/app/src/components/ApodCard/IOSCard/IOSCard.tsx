import { Dots } from 'components/ApodCard/IOSCard/Dots/Dots';

export const IOSCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`flex flex-col rounded-lg bg-zinc-800 ${className}`}>
      <div className="h-[20px] w-full rounded-t-lg bg-zinc-500">
        <Dots />
      </div>
      {children}
    </div>
  );
};
