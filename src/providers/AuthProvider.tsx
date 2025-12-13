"use client";

import {useEffect} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {getFirebaseAuth} from "@/firebase/client";
import {useAuthStore} from "../../store/authStore";

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const {setUser, setLoading} = useAuthStore();

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsub;
  }, []);

  return <>{children}</>;
}
