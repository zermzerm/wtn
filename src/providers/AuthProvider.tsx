"use client";

import {useEffect} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {getFirebaseAuth} from "@/firebase/client";
import {useAuthStore} from "../../store/authStore";
import {AuthContext} from "./AuthContext";

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const {setUser, setLoading} = useAuthStore();

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsub;
  }, [setUser, setLoading]);

  const logout = async () => {
    const auth = getFirebaseAuth();
    await signOut(auth);
  };

  return <AuthContext.Provider value={{logout}}>{children}</AuthContext.Provider>;
}
