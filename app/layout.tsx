import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F6F6F6]	">
        <div className="container w-4/5 mx-auto my-10">{children}</div>
      </body>
    </html>
  );
}
