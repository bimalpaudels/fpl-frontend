import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container w-4/5 m-auto">{children}</div>
      </body>
    </html>
  );
}
