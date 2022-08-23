import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms } from './action';
import { Films } from '../types/films';

type InitialState = {
  genre: string,
  films: Films,
  filteredFilms: Films,
}

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  filteredFilms: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      // state.films = action.payload === 'All genres'
      //   ? films
      //   : films.filter((film) => film.genres.includes(action.payload));
    })
    .addCase(loadFilms, (state, action) => {
      state.filteredFilms = action.payload;
    });
});
