"use client";

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";

export default function ClientLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <NavBar />
      <div style={{paddingTop: "80px"}}>{children}</div>
      <Footer />
    </>
  );
}
