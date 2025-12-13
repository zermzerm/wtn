"use client";

import Nav from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <Nav />
      <div style={{paddingTop: "80px"}}>{children}</div>
      <Footer />
    </>
  );
}
