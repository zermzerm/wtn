"use client";

import {create} from "zustand";
import {User} from "firebase/auth";

interface AuthState {
  user: User | null;
  nickname: string | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setNickname: (nickname: string | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  nickname: null,
  loading: true,
  setUser: (user) => set({user}),
  setNickname: (nickname) => set({nickname}),
  setLoading: (loading) => set({loading}),
}));
