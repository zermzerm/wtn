"use client";

import AuthProvider from "@/providers/AuthProvider";

export default function ClientProviders({children}: {children: React.ReactNode}) {
  return <AuthProvider>{children}</AuthProvider>;
}
