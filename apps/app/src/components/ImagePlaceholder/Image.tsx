export const ImagePlaceholder = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  if (!children) {
    return (
      <div className={`relative flex items-center justify-center rounded-b-lg bg-zinc-800 ${className}`}>
        <div className="h-12 w-12 animate-spin rounded-full border border-solid border-gray-500 border-t-transparent"></div>
      </div>
    );
  }
  return <div className={`relative  rounded-b-lg bg-zinc-800 ${className}`}>{children}</div>;
};
