import SubHeader from '@/components/SubHeader';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`min-h-content rounded-xl bg-white px-3 py-4`}>
      <SubHeader icon>최고 인기</SubHeader>
      {children}
    </div>
  );
}
