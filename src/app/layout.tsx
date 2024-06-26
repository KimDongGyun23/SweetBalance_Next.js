import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="flexCenter bg-blue-50">
      <body className="flexColumn min-h-svh w-full max-w-[450px] bg-primary p-5">
        <Image className="mx-auto mb-5" src="/svgs/logo.svg" alt="logo" width={262} height={112} />
        {children}
      </body>
    </html>
  );
}
