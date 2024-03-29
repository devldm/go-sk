import NavBar from "../components/NavBar/NavBar";
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
      <body
        className="dark:text-[#f0f6fc] dark:bg-[#121212] bg-[#f2f2f2]
        text-[#111]"
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
