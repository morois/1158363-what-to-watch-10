import { browserHistory } from './../../utils/browser-history';
import { reducer } from '../reducer';
import {Middleware} from 'redux';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === 'film/redirectToRoute') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
