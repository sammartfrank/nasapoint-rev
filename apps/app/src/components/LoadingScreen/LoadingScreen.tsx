export const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-zinc-900">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-400" />
    </div>
  );
};
