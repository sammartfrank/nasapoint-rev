import { MdThumbUp } from 'react-icons/md';

export const Loader = () => {
  return (
    <div className="container flex flex-row justify-center gap-24 mx-auto">
      <h1>Loading</h1>
      {/* <div className="flex flex-col text-white gap-y-6 w-96">
        <span className="text-gray-500 text-md">{date}</span>
        <div className="flex flex-col gap-5">
          <h2 className="w-full text-2xl">{title}</h2>
          <span className="text-gray-500 text-md">{copyright}</span>
          <p className="text-justify">{explanation}</p>
        </div>
        <div>
          <button className="flex flex-row items-center gap-2">
            <MdThumbUp size={14} />
          </button>
        </div>
      </div> */}
    </div>
  );
};
