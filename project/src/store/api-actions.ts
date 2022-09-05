import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from './../const';
import { AxiosInstance } from 'axios';
import { AppDispatch, State } from './../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Films, Film } from '../types/films';
import {
  loadComments,
  loadFavoriteFilms,
  loadFilms,
  loadFilm,
  redirectToRoute,
  requireAuthorization,
  setErrorAction,
  setIsFilmLoading,
  loadPromoFilm,
} from './action';
import { AuthData } from '../types/auth-data';
import { dropToken, saveToken } from '../services/token';
import { UserData } from '../types/user-data';
import { store } from '.';
import { Comments } from '../types/comments';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch,
    state: State,
    extra: AxiosInstance,
}> (
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(APIRoute.Films);
    dispatch(loadFilms(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email,password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(loadFavoriteFilms([]));
  }
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setErrorAction(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}> (
  'data/fetchComments',
  async (filmId , {dispatch, extra: api}) => {
    const path = APIRoute.Comments.replace(':filmId', filmId.toString());
    const {data} = await api.get<Comments>(path);
    dispatch(loadComments(data));
  }
);

export const fetchFilmAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}> (
  'data/fetchComments',
  async (filmId , {dispatch, extra: api}) => {
    dispatch(setIsFilmLoading());
    const path = APIRoute.Film.replace(':filmId', filmId);
    const { data } = await api.get<Film>(path).catch((res) => res);
    dispatch(loadFilm(data));
  }
);

export const fetchFilmsFavoriteAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/getFilmsFavorite',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Films>(`${APIRoute.Favorite}`);
    dispatch(loadFavoriteFilms(data));
  }
);

export const setFavoriteFilmStatusAction = createAsyncThunk<void, Film, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/getFilmsFavorite',
  async (film, {dispatch, extra: api}) => {
    const newFavoriteState = !film.isFavorite;
    const path = APIRoute.FavoriteStatus
      .replace(':filmId', film.id.toString())
      .replace(':status', newFavoriteState ? '1' : '0');
    const {data} = await api.post<Film>(path).finally(() => {
      dispatch(fetchFilmsFavoriteAction());
      dispatch(getPromoFilm());
    });
    dispatch(loadFilm(data));
  }
);

export const getPromoFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}> (
  'data/getPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film>(APIRoute.Promo);
    dispatch(loadPromoFilm(data));
  }
);

export const submitReview = createAsyncThunk<void, { text: string, rating: number, filmId: string }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}> (
  'data/submitComment',
  async ({ text, rating, filmId }, {dispatch, extra: api}) => {
    await api.post<Comment>(APIRoute.Comments.replace(':filmId', filmId), {
      comment: text,
      rating,
    }).then(() => {
      (window as Window).location = AppRoute.Film.replace(':id', filmId);
    });
  }
);
