import {createAction} from '@reduxjs/toolkit';

export const changeGenre = createAction('film/changeGenre', (genre) => ({
  payload: genre,
}));
