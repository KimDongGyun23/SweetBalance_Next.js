'use client';
import { useRouter } from 'next/navigation';
import { AiOutlineInbox } from 'react-icons/ai';

const ListItem = ({ postItem }: { postItem: any }) => {
  const router = useRouter();
  const handleClick = () => router.push(`/balance/${postItem.id}`);

  return (
    <div
      className="flexBetweenCenter relative cursor-pointer gap-3 rounded-lg bg-white px-6 py-4"
      onClick={handleClick}
    >
      <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl">
        {postItem.leftSideTitle}
      </p>
      <p className="text-xl font-bold text-gray-200">VS</p>
      <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl">
        {postItem.rightSideTitle}
      </p>

      <div className="flexAlign absolute bottom-1 right-2 gap-1 text-xs text-gray-200">
        <AiOutlineInbox />
        <p>{postItem.leftSideVote + postItem.rightSideVote}</p>
      </div>
    </div>
  );
};

export default ListItem;
