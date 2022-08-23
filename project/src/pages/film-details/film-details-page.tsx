import { Films } from '../../types/films';
import FilmDetails from '../../components/film-details/film-details';
import PageNotFound from '../page-not-found/page-not-found';
import {Link, useParams} from 'react-router-dom';
import DetailsHeader from '../../components/details-header/details-header';

type FilmDetailsProps = {
    films : Films
}

export default function FilmPageDetails ({films} : FilmDetailsProps) : JSX.Element {
  const {id} = useParams();
  const film = films.find((e) => String(e.id) === id);

  return film ? (
    <section className="film-card film-card--full">
      <div className="film-card__hero">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <DetailsHeader/>

        <div className="film-card__wrap">
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genres}</span>
              <span className="film-card__year">{film.released}</span>
            </p>

            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
              <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
            </div>
          </div>
        </div>
      </div>
      <FilmDetails films={films}/>
    </section>
  ) : <PageNotFound/>;
}
