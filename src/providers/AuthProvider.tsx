"use client";

import {onAuthStateChanged, signOut} from "firebase/auth";
import {useEffect, useCallback} from "react";
import {auth} from "@/firebase/client";
import {AuthContext} from "./AuthContext";
import {useAuthStore} from "../../store/authStore";

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const setUser = useAuthStore((s) => s.setUser);
  const setLoading = useAuthStore((s) => s.setLoading);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  const logout = useCallback(async () => {
    await signOut(auth);
    setUser(null);
  }, [setUser]);

  return <AuthContext.Provider value={{logout}}>{children}</AuthContext.Provider>;
}
