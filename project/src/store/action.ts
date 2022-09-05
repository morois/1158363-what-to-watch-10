import { createAction } from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Comments } from '../types/comments';
import { Films, Film } from '../types/films';

export const changeGenre = createAction('film/changeGenre', (genre) => ({
  payload: genre,
}));

export const loadFilms = createAction<Films>('data/loadFilms');

export const loadFilm = createAction<Film>('data/loadFilm');

export const setIsFilmLoading = createAction<void>('data/setIsFilmLoading');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAction');

export const setErrorAction = createAction<string | null>('login/setError');

export const redirectToRoute = createAction<AppRoute>('film/redirectToRoute');

export const showMore = createAction<AppRoute>('film/showMore');

export const loadComments = createAction<Comments>('data/comments');

export const loadFavoriteFilms = createAction<Films>('data/loadFavoriteFilms');

export const loadPromoFilm = createAction<Film>('data/loadPromoFilm');
