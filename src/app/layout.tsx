import type {Metadata} from "next";
import "./globals.css";
import Nav from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "WebToonNet",
  description: "WebToon Review Site",
  // icons: {
  //   icon: "./favicon.ico",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Nav />
        <div style={{paddingTop: "80px"}}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
