import SubHeader from '@/components/SubHeader';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SubHeader>최근 등록 밸런스</SubHeader>
      {children}
    </>
  );
}
