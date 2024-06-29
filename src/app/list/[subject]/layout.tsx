import SubHeader from '@/components/SubHeader';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SubHeader />
      {children}
    </>
  );
}
