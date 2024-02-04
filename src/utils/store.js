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
  searchText: null,
  searchMovies: null,
  searchPageMoviesLoading: false,
  mainContainerDataLoading: false,
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

  addSearchMovies: (data) => {
    set(() => {
      const { movies, title } = data;
      return {
        searchMovies: movies,
        searchText: title != null ? `Search Result for : "${title}"` : null,
      };
    });
  },

  setSearchPageMovieLoading: (val) => {
    set(() => {
      return {
        searchPageMoviesLoading: val,
      };
    });
  },
  setMainContainerMoviesLoading: (val) => {
    set(() => {
      return {
        mainContainerDataLoading: val,
      };
    });
  },
}));

export const useGpt = create(() => ({}));
