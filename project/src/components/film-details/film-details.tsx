import { Films } from '../../types/films';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import {useParams, Link} from 'react-router-dom';

type FilmDetailsProps = {
    films: Films;
};

export default function FilmDetails ({films} : FilmDetailsProps) : JSX.Element {
  const {id} = useParams();
  const film = films.find((e) => String(e.id) === id);

  return film ? (
    <div className="film-card__wrap film-card__translate-top">
      <div className="film-card__info">
        <div className="film-card__poster film-card__poster--big">
          <img src={film.posterImage} alt={film.name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <nav className="film-nav film-card__nav">
            <ul className="film-nav__list">
              <li className="film-nav__item">
                <Link to="#" className="film-nav__link">Overview</Link>
              </li>
              <li className="film-nav__item film-nav__item--active">
                <Link to="#" className="film-nav__link">Details</Link>
              </li>
              <li className="film-nav__item">
                <Link to="#" className="film-nav__link">Reviews</Link>
              </li>
            </ul>
          </nav>

          <div className="film-card__text film-card__row">
            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Director</strong>
                <span className="film-card__details-value">{film.director}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Starring</strong>
                <span className="film-card__details-value">
                  {film.starring}
                </span>
              </p>
            </div>

            <div className="film-card__text-col">
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Run Time</strong>
                <span className="film-card__details-value">{film.runTime}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Genre</strong>
                <span className="film-card__details-value">{film.genre}</span>
              </p>
              <p className="film-card__details-item">
                <strong className="film-card__details-name">Released</strong>
                <span className="film-card__details-value">{film.released}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <PageNotFound/>;
}
