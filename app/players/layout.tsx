export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="bg-white shadow-lg my-10">{children}</div>
    </section>
  );
}
