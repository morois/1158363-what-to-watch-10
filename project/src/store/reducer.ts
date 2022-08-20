import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, getFilmListGenre } from './action';
import { Genres } from '../const';
import { films } from '../mock/films';

const initialState = {
  genres: Genres,
  films: films,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genres = action.payload;
    })
    .addCase(getFilmListGenre, (state, action) => {
      state.films = action.payload;
    });
});
