import {createAction} from '@reduxjs/toolkit';
import { Films } from '../types/films';

export const changeGenre = createAction('film/changeGenre', (genre) => ({
  payload: genre,
}));

export const loadFilms = createAction<Films>('data/loadFilms');
