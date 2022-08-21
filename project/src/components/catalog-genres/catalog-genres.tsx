import { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeGenre } from '../../store/action';
import { Films } from '../../types/films';

type CatalogGenresProps = {
  films: Films
}

export default function CatalogGenres ({ films }: CatalogGenresProps) : JSX.Element {
  const activeGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const genres = [...new Set(films.flatMap((film) => film.genre))]
    .sort((a,b) => a.localeCompare(b));

  const onGenreClick = (genre: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch({
      type: changeGenre.type,
      payload: genre,
    });
  };
  return (
    <ul className="catalog__genres-list">
      {
        ['All genres', ...genres].map((genre) => (
          <li
            className={`catalog__genres-item${activeGenre === genre ? ' catalog__genres-item--active' : ''}`}
            key={genre}
          >
            <a
              href="/#"
              className="catalog__genres-link"
              onClick={onGenreClick(genre)}
            >
              {genre}
            </a>
          </li>
        ))
      }
    </ul>
  );
}
