import { useParams, Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

export default function PlayBtn (): JSX.Element {
  const {films} = useAppSelector((state) => state);
  const {id} = useParams();
  const film = films.find((e) => String(e.id) === id);

  return (
    <Link to={`/player/${film?.id}`} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}
