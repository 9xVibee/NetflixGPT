/* eslint-disable no-unused-labels */
import { create } from "zustand";

export const useUserDetails = create((set) => ({
  user: "details",
  addUser: (userDetails) => {
    set(() => {
      return {
        user: userDetails,
      };
    });
  },
}));

export const useNowPlayingMovies = create((set) => ({
  nowPlayingMovies: null,
  addNowPlayingMovies: (data) =>
    set(() => {
      return {
        nowPlayingMovies: data,
      };
    }),
}));
