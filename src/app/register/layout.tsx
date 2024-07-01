import SubHeader from '@/components/SubHeader';
import { Suspense } from 'react';

export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`flexColumn min-h-content rounded-xl bg-white px-3 py-4`}>
      <Suspense fallback={<>Loading...</>}>
        <SubHeader />
      </Suspense>
      <div className="flex-1">{children}</div>
    </div>
  );
}
