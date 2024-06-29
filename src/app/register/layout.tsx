import SubHeader from '@/components/SubHeader';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flexColumn min-h-content rounded-xl bg-white px-3 py-4`}>
      <SubHeader />
      <div className="flex-1">{children}</div>
    </div>
  );
}
