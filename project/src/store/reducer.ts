import { AuthorizationStatus } from './../const';
import { createReducer } from '@reduxjs/toolkit';
import { changeGenre, loadFilms, requireAuthorization, setErrorAction, showMore, loadComments } from './action';
import { Films } from '../types/films';
import { Comments } from '../types/comments';

type InitialState = {
  genre: string,
  films: Films,
  isDataLoaded: boolean,
  autorizationStatus: AuthorizationStatus,
  error: string | null,
  page: number,
  comments: Comments
};

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  isDataLoaded: false,
  autorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  page: 1,
  comments: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
      state.page = 1;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload.sort((a, b) => a.name.localeCompare(b.name));
      state.isDataLoaded = true;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.autorizationStatus = action.payload;
    })
    .addCase(setErrorAction, (state, action) => {
      state.error = action.payload;
    })
    .addCase(showMore, (state) => {
      state.page = state.page + 1;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
      state.isDataLoaded = false;
    });
});

