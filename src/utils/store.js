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

export const useMovies = create((set) => ({
  nowPlayingMovies: null,
  popular: null,
  topRated: null,
  upcoming: null,
  tmdbGptMovies: [],
  gptMovieNames: [],
  addNowPlayingMovies: (data) =>
    set(() => {
      return {
        nowPlayingMovies: data,
      };
    }),

  addPopularMovies: (data) =>
    set(() => {
      return {
        popular: data,
      };
    }),

  addTopRated: (data) =>
    set(() => {
      return {
        topRated: data,
      };
    }),

  addUpcoming: (data) =>
    set(() => {
      return {
        upcoming: data,
      };
    }),

  addGptMovies: (data) => {
    set(() => {
      const { movieNames, tmdbMovies } = data;
      return {
        tmdbGptMovies: tmdbMovies,
        gptMovieNames: movieNames,
      };
    });
  },
}));

export const useGpt = create(() => ({}));
