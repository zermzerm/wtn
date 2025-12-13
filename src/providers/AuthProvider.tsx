"use client";

import {useEffect} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {getFirebaseAuth, getFirebaseDB} from "@/firebase/client";
import {useAuthStore} from "../../store/authStore";
import {AuthContext} from "./AuthContext";
import {doc, getDoc} from "firebase/firestore";

export default function AuthProvider({children}: {children: React.ReactNode}) {
  const {setUser, setNickname, setLoading} = useAuthStore();

  useEffect(() => {
    const auth = getFirebaseAuth();
    const db = getFirebaseDB();

    const unsub = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        const snap = await getDoc(doc(db, "users", user.uid));
        setNickname(snap.exists() ? snap.data().nickname : null);
      } else {
        setNickname(null);
      }
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
