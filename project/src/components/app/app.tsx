import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import CreateMainPage from '../../pages/main/main-page';
import Movie from '../../pages/movie/movie-page';
import MyList from '../../pages/my-list/my-list-page';
import Player from '../../pages/player/player-page';
import AddReview from '../../pages/add-review/review-page';
import SignIn from '../../pages/sign-in/sign-in-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { Films } from '../../types/films';


type AppProps = {
  films: Films
}
function App({films}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<CreateMainPage films={films}/>}
        />
        <Route
          path={AppRoute.Film}
          element={<Movie/>}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Player}
          element={<Player films={films}/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview films = {films}/>}
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

export default App;
