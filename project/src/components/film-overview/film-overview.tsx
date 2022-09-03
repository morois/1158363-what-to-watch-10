import { RatingLevel } from '../../const';
import { Film } from '../../types/films';

type FilmOverviewProps = {
    film: Film;
};

export default function FilmOverview({film}: FilmOverviewProps): JSX.Element {

  const getRatingLevel = (rating: number) => {
    if (rating === RatingLevel.AWESOME) {
      return 'Awesome';
    }

    if (rating >= RatingLevel.VERY_GOOD) {
      return 'Very good';
    }

    if (rating >= RatingLevel.GOOD) {
      return 'Good';
    }

    if (rating >= RatingLevel.NORMAL) {
      return 'Normal';
    }

    return 'Bad';
  } ;


  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getRatingLevel(film.rating)}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {film.starring.join(', ')}</strong></p>
      </div>
    </>
  );
}
