import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import CreateMainPage from '../../pages/main/main-page';
import FilmPageDetails from '../../pages/film-page/film-page';
import MyList from '../../pages/my-list/my-list-page';
import Player from '../../pages/player/player-page';
import AddReview from '../../pages/add-review/review-page';
import SignIn from '../../pages/sign-in/sign-in-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { fetchFilmAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import { browserHistory } from '../../utils/browser-history';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFilmAction());
  }, [dispatch]);

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<CreateMainPage/>}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPageDetails/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute >
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignIn/>}
        />
        <Route
          path='*'
          element={<PageNotFound/>}
        />
      </Routes>
    </HistoryRouter>
  );
}

