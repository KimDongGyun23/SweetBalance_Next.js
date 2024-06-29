import SubHeader from '@/components/SubHeader';

export default function CommentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flexColumn min-h-content rounded-xl bg-[#D5EDFF] px-3 py-4">
      <SubHeader />
      <div className="flexColumn flex-1 justify-center">{children}</div>
    </div>
  );
}