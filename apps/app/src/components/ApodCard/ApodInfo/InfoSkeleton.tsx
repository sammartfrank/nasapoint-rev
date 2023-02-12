import { ImagePlaceholder } from 'components/ImagePlaceholder/Image';
import { IOSCard } from '../IOSCard/IOSCard';

export const InfoSkeleton = () => {
  return (
    <div className="container flex flex-row justify-center gap-24 mx-auto">
      <div className="flex flex-col text-white opacity-75 gap-y-6 w-96 h-[650px] bg-zinc-900 rounded-md">
        <div className="flex flex-col items-center flex-1 w-full p-5">
          <div className="flex-col items-center justify-center w-full animate-pulse rounded-xl ">
            <div className="flex flex-col justify-center space-y-5">
              <div className="h-6 bg-gray-700 rounded-md w-12/12 animate-pulse"></div>
              <div className="w-9/12 h-6 bg-gray-700 rounded-md "></div>
              <div className="w-9/12 h-6 bg-gray-700 rounded-md animate-pulse"></div>
              <br />
              <div className="h-6 bg-gray-700 rounded-md w-12/12 animate-pulse"></div>
              <div className="w-9/12 h-6 bg-gray-700 rounded-md "></div>
              <br />
              <div className="h-6 bg-gray-700 rounded-md w-12/12 "></div>
              <div className="h-6 bg-gray-700 rounded-md w-12/12 "></div>
              <div className="w-9/12 h-6 bg-gray-700 rounded-md "></div>
              <div className="h-6 bg-gray-700 rounded-md w-12/12 animate-pulse"></div>
              <div className="w-9/12 h-6 bg-gray-700 rounded-md"></div>
              <div className="h-6 bg-gray-700 rounded-md w-12/12 animate-pulse "></div>
              <div className="w-9/12 h-6 bg-gray-700 rounded-md "></div>
              <div className="w-9/12 h-6 bg-gray-700 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <IOSCard className="flex w-full shadow-lg grow shadow-black">
          <ImagePlaceholder className="w-[600px] mx-auto h-[620px]" />
        </IOSCard>
      </div>
    </div>
  );
};
