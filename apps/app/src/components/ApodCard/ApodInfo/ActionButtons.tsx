import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdArchive, MdShare } from 'react-icons/md';

const LIKE_RED = '#FF6961';
const HEART_SIZE = 14;

export const ActionButtons = () => {
  const [liked, setLiked] = useState(false);
  const handleOnClick = () => {
    setLiked(!liked);
  };
  return (
    <div className="flex flex-row gap-3">
      <button className="flex flex-row items-center gap-2">
        {liked ? (
          <AiFillHeart size={HEART_SIZE} fill={LIKE_RED} onClick={handleOnClick} />
        ) : (
          <AiOutlineHeart size={HEART_SIZE} className="hover:text-red-500" onClick={handleOnClick} />
        )}
      </button>
      <button>
        <MdShare size={14} />
      </button>
      <button>
        <MdArchive size={14} />
      </button>
    </div>
  );
};
