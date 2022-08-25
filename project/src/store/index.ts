import { createAPI } from './../services/api';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { redirect } from './middleware/redirect';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    }).concat(redirect)
});
