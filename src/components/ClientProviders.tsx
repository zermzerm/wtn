"use client";

import AuthProvider from "@/providers/AuthProvider";
import ClientLayout from "@/components/layout/ClientLayout";

export default function ClientProviders({children}: {children: React.ReactNode}) {
  return (
    <AuthProvider>
      <ClientLayout>{children}</ClientLayout>
    </AuthProvider>
  );
}
