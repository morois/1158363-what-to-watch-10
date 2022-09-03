import { SIMILAR_FILMS_COUNT } from '../../const';
import { useAppSelector } from '../../hooks';
import FilmCard from '../film-card/film-card';

interface SimilarFilmsProps {
    genre: string,
}

export default function SimilarFilms({genre}: SimilarFilmsProps): JSX.Element {
  const { films } = useAppSelector((state) => state);
  const similarFilms = films.filter((film) => film.genre === genre).slice(0, SIMILAR_FILMS_COUNT);

  return (
    <section className="catalog catalog--like-this">
      <div className="catalog__films-list">
        { similarFilms.map((similarFilm) => (
          <FilmCard key={similarFilm.id} film={similarFilm}/>
        )) }
      </div>
    </section>
  );
}
