const CircleButton = ({ children }: ChildrenProps) => {
  return (
    <div className="flexCenter fixed bottom-10 h-20 w-20 self-end rounded-full border-4 border-blue-400 bg-white">
      <p className="text-lg font-bold text-blue-400">{children}</p>
    </div>
  );
};

export default CircleButton;
