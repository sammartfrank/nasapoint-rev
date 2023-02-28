import { IOSCard } from '../IOSCard/IOSCard';

export const InfoSkeleton = () => {
  return (
    <div className="container mx-auto flex flex-row justify-center gap-24">
      <div className="flex h-[650px] w-96 flex-col gap-y-6 rounded-md bg-zinc-900 text-white opacity-75">
        <div className="flex w-full flex-1 flex-col items-center p-5">
          <div className="w-full animate-pulse flex-col items-center justify-center rounded-xl ">
            <div className="flex flex-col justify-center space-y-5">
              <div className="h-6 w-full animate-pulse rounded-md bg-gray-700"></div>
              <div className="h-6 w-9/12 rounded-md bg-gray-700 "></div>
              <div className="h-6 w-9/12 animate-pulse rounded-md bg-gray-700"></div>
              <br />
              <div className="h-6 w-full animate-pulse rounded-md bg-gray-700"></div>
              <div className="h-6 w-9/12 rounded-md bg-gray-700 "></div>
              <br />
              <div className="h-6 w-full rounded-md bg-gray-700 "></div>
              <div className="h-6 w-full rounded-md bg-gray-700 "></div>
              <div className="h-6 w-9/12 rounded-md bg-gray-700 "></div>
              <div className="h-6 w-full animate-pulse rounded-md bg-gray-700"></div>
              <div className="h-6 w-9/12 rounded-md bg-gray-700"></div>
              <div className="h-6 w-full animate-pulse rounded-md bg-gray-700 "></div>
              <div className="h-6 w-9/12 rounded-md bg-gray-700 "></div>
              <div className="h-6 w-9/12 animate-pulse rounded-md bg-gray-700"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <IOSCard className="flex w-full grow shadow-lg shadow-black" />
      </div>
    </div>
  );
};
