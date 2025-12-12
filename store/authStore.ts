// store/authStore.ts
import {create} from "zustand";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "../lib/firebase";
import type {User} from "firebase/auth";

interface UserState {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
}

export const useAuthStore = create<UserState>((set) => ({
  user: null,
  loading: true,
  logout: async () => {
    await signOut(auth);
    set({user: null});
  },
}));

onAuthStateChanged(auth, (currentUser) => {
  useAuthStore.setState({
    user: currentUser,
    loading: false,
  });
});
