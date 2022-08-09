import { Link } from 'react-router-dom';

export default function DetailsFilmsNav () : JSX.Element {
  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li className="film-nav__item">
          <Link to="#" className="film-nav__link">Overview</Link>
        </li>
        <li className="film-nav__item film-nav__item--active">
          <Link to="#" className="film-nav__link">Details</Link>
        </li>
        <li className="film-nav__item">
          <Link to="#" className="film-nav__link">Reviews</Link>
        </li>
      </ul>
    </nav>
  );
}
