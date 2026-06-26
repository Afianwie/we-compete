import "./global.css";

export const metadata = {
  title: "We Compete - Tournament Hub",
  description: "Automated DLS & Esports Tournament Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
