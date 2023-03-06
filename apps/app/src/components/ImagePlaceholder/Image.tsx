import { motion, useScroll } from 'framer-motion';

export const ImagePlaceholder = ({ children }: { children?: React.ReactNode }) => {
  if (!children) {
    return (
      <div className="relative -z-10 flex items-center justify-center rounded-b-lg bg-zinc-800">
        <div className="h-12 w-12 animate-spin rounded-full border border-solid border-gray-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      {children}
    </motion.div>
  );
};
