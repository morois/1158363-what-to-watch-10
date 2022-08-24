import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, setDataLoadedStatus } from './action';
import { Films } from '../types/films';

type InitialState = {
  genre: string,
  films: Films,
  filteredFilms: Films,
  isDataLoaded: boolean,
}

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  filteredFilms: [],
  isDataLoaded: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.filteredFilms = action.payload === 'All genres'
        ? state.films
        : state.films.filter((film) => film.genre === action.payload);
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filteredFilms = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    });
});
