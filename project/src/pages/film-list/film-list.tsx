import { Films } from '../../types/films';
import FilmCard from '../../components/film-card/film-card';

type ListProps = {
    films: Films;
};

export default function FilmList({films}: ListProps): JSX.Element {
  const filmCards = films.map((film) => (
    <FilmCard
      key={film.id}
      film={film}
    />
  ));
  return (
    <div className="catalog__films-list">
      {filmCards}
    </div>
  );
}
