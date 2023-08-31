import Footer from "@/components/footer";
import "./globals.css";
import Navbar from "@/components/nav";
import { MenuObjects } from "@/lib/types";

export const metadata = {
  title: "SFC",
  description:
    "Enjoy blockchain finance has never been so easy!",
};

const menuItems: MenuObjects[] = [
  { title: "About Us", href: "/", target: "About Us" },
  { title: "Features", href: "/", target: "Features" },
  { title: "Teams", href: "/", target: "Teams" },
  { title: "News", href: "/", target: "News" },
  { title: "Download", href: "/", target: "Download" },
  { title: "Contact us", href: "/", target: "Contact Us" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        <Navbar menuItems={menuItems} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
