import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('film/changeGenre', (genre) => ({
  payload: genre,
}));

export const getFilmListGenre = createAction('film/getFilmList', (filmListGenre) => ({
  payload: filmListGenre,
}));
