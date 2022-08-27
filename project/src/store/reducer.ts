import { AuthorizationStatus } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, requireAuthorization, setErrorAction } from './action';
import { Films } from '../types/films';

type InitialState = {
  genre: string,
  films: Films,
  isDataLoaded: boolean,
  autorizationStatus: AuthorizationStatus,
  error: string | null,
};

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  isDataLoaded: false,
  autorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.autorizationStatus = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    });
});
