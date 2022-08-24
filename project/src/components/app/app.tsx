import { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import CreateMainPage from '../../pages/main/main-page';
import FilmPageDetails from '../../pages/film-details/film-details-page';
import MyList from '../../pages/my-list/my-list-page';
import Player from '../../pages/player/player-page';
import AddReview from '../../pages/add-review/review-page';
import SignIn from '../../pages/sign-in/sign-in-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { fetchFilmAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Preloader from '../preloader/preloader';

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.films);
  const {isDataLoaded} = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchFilmAction());
  }, []);

  if (isDataLoaded || films.length === 0) {
    return (
      <Preloader/>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<CreateMainPage films={films}/>}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmPageDetails films={films}/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview films={films}/>}
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
    </BrowserRouter>
  );
}

