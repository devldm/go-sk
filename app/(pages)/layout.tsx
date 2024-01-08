import "../globals.css";

export const metadata = {
  title: "GO-SK",
  description: "Kick start your Korean life.",
  icons: {
    icon: "./sk.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
