import { SIMILAR_FILMS_COUNT } from '../../const';
import { Film } from '../../types/films';
import FilmCard from '../film-card/film-card';

interface SimilarFilmsProps {
    films: Film,
    genre: string,
}

export default function SimilarFilms({films, genre}: SimilarFilmsProps): JSX.Element {

  const similarFilms = films.filter((film) => film.genre === genre).slice(0, SIMILAR_FILMS_COUNT);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>
      <FilmCard film={similarFilms}/>
    </section>
  );
}
