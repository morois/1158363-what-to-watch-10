import { AuthorizationStatus } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import {
  changeGenre,
  loadFilms,
  loadFilm,
  requireAuthorization,
  setErrorAction,
  showMore,
  loadComments,
  loadFavoriteFilms,
  setIsFilmLoading,
  loadPromoFilm,
} from './action';
import { Films, Film } from '../types/films';
import { Comments } from '../types/comments';

type InitialState = {
  genre: string,
  films: Films,
  isDataLoaded: boolean,
  film: Film | null,
  isFilmLoaded: boolean;
  autorizationStatus: AuthorizationStatus,
  error: string | null,
  page: number,
  comments: Comments
  favoriteFilms: Films;
  isFavoriteFilmsLoaded: boolean;
  promoFilm: Film | null;
};

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  isDataLoaded: false,
  film: null,
  isFilmLoaded: false,
  autorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  page: 1,
  comments: [],
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
  promoFilm: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.page = 1;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload.sort((a, b) => a.name.localeCompare(b.name));
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.autorizationStatus = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(showMore, (state) => {
      state.page = state.page + 1;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteFilmsLoaded = true;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
      state.isFilmLoaded = true;
    })
    .addCase(setIsFilmLoading, (state) => {
      state.film = null;
      state.isFilmLoaded = false;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    });
});
