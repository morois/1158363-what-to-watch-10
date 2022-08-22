import { createReducer } from '@reduxjs/toolkit';
import { changeGenre } from './action';
import { films } from '../mock/films';

const initialState = {
  genre: 'All genres',
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.genre = action.payload;
      state.films = action.payload === 'All genres'
        ? films
        : films.filter((film) => film.genre.includes(action.payload));
    });
});
