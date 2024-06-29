import SubHeader from '@/components/SubHeader';

export default function CommentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flexColumn max-h-content min-h-content rounded-xl bg-[#D5EDFF] px-3 py-4">
      <SubHeader />
      {children}
    </div>
  );
}
