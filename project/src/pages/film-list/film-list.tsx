import FilmCard from '../../components/film-card/film-card';
import { useAppSelector } from '../../hooks';


export default function FilmList(): JSX.Element {
  const films = useAppSelector((state) => state.filteredFilms);
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
