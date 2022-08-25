import {createAction} from '@reduxjs/toolkit';
import { AppRoute, AuthorizationStatus } from '../const';
import { Films } from '../types/films';

export const changeGenre = createAction('film/changeGenre', (genre) => ({
  payload: genre,
}));

export const loadFilms = createAction<Films>('data/loadFilms');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAction');

export const setErrorAction = createAction<string | null>('login/setError');

export const redirectToRoute = createAction<AppRoute>('film/redirectToRoute');
