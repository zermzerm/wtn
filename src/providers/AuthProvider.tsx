// src/providers/AuthProvider.tsx
"use client";

import {onAuthStateChanged} from "firebase/auth";
import {useEffect} from "react";
import {auth} from "@/firebase/client";
import {useAuthStore} from "../../store/authStore";

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const {setUser, setLoading} = useAuthStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  return <>{children}</>;
}
