import { AiOutlineInbox } from 'react-icons/ai';

const ListItem = () => {
  return (
    <div className="flexBetweenCenter relative gap-3 rounded-lg bg-white px-6 py-4">
      <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className="text-xl font-bold text-gray-200">VS</p>
      <p className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-center text-xl">
        item
      </p>

      <div className="flexAlign absolute bottom-1 right-2 gap-1 text-xs text-gray-200">
        <AiOutlineInbox />
        <p>123</p>
      </div>
    </div>
  );
};

export default ListItem;
