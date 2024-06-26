export default function ListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="rounded-xl bg-white px-3 py-4">{children}</div>;
}
