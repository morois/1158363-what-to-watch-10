import { Link } from 'react-router-dom';
import {Film} from './../../types/films';

interface FilmProps {
  film: Film,
}

export default function FilmCard ({film} : FilmProps) : JSX.Element {
  const {id, posterImage, name} = film;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}` }className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}
