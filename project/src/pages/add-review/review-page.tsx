import AddNewReview from '../../components/add-review/add-review';
import PageNotFound from '../page-not-found/page-not-found';
import {Link, useParams} from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import Logo from '../../components/logo/logo';
import SignIn from '../../components/sign-in/sign-in';
import Preloader from '../../components/preloader/preloader';

export default function AddReview(): JSX.Element {
  const { films, isFilmLoaded } = useAppSelector((state) => state);
  const {id} = useParams();
  const film = films.find((e) => String(e.id) === id);

  if (!isFilmLoaded) {
    return <Preloader/>;
  }

  if (!film) {
    return <PageNotFound/>;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo/>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to='#' className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <SignIn/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>
      </div>

      <AddNewReview/>
    </section>
  );
}
