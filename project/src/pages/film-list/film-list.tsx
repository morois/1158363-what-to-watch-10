import { memo } from 'react';
import FilmCard from '../../components/film-card/film-card';
import { Films } from '../../types/films';

interface FilmListProps {
  films: Films;
}

const FilmList = ({ films }: FilmListProps): JSX.Element => {
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
};

export default memo(FilmList);
