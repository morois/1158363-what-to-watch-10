import { MouseEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeGenre } from '../../store/action';

interface CatalogGenresProps {
  genres: string[];
  activeGenre: string;
}
export default function CatalogGenres ({ genres, activeGenre }: CatalogGenresProps) : JSX.Element {
  const dispatch = useAppDispatch();

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
