import { MouseEventHandler } from 'react';
import { MdCalendarToday, MdList } from 'react-icons/md';

export enum View {
  Thumb = 'thumb',
  List = 'list',
}

type ViewType = {
  label: View;
  icon: JSX.Element;
};

const views: ViewType[] = [
  {
    label: View.Thumb,
    icon: <MdCalendarToday />,
  },
  {
    label: View.List,
    icon: <MdList />,
  },
];

export const ViewSelector = ({ view: viewSelected, setView }: { view: View; setView: (view: View) => void }) => {
  const handleOnViewSelected = (view: ViewType) => {
    setView(view.label);
  };

  return (
    <div className="flex flex-row gap-4 bg-zinc-800 rounded-full p-1">
      {views.map((view) => (
        <span
          key={view.label}
          onClick={(e) => handleOnViewSelected(view)}
          data-selected={viewSelected === view.label}
          className="hover:cursor-pointer data-[selected=true]:bg-gray-700 p-2 rounded-full"
        >
          {view.icon}
        </span>
      ))}
    </div>
  );
};
