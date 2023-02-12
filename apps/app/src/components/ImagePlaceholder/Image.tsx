export const ImagePlaceholder = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  if (!children) {
    return (
      <div className={`relative flex justify-center items-center bg-zinc-800 rounded-b-lg ${className}`}>
        <div className="w-12 h-12 border border-gray-500 border-solid rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }
  return <div className={`relative  bg-zinc-800 rounded-b-lg ${className}`}>{children}</div>;
};
