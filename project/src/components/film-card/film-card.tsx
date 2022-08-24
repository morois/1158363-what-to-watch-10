import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Film } from './../../types/films';
import VideoPlayer from '../video-player/video-player';

interface FilmProps {
  film: Film,
}

export default function FilmCard ({film} : FilmProps) : JSX.Element {
  const {id, previewImage, name} = film;
  const [isPlayer, setPlayer] = useState(false);

  return (
    <article className="small-film-card catalog__films-card" onMouseOver={() => setPlayer(true)} onMouseOut={() => setPlayer(false)}>
      <div className="small-film-card__image">
        {
          isPlayer ? <VideoPlayer film={film}/> :

            <img src={previewImage} alt={name} width="280" height="175" />
        }
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}` }className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}
