import { useAppDispatch, useAppSelector } from '../../hooks';
import Logo from '../logo/logo';
import PlayBtn from '../play-btn/play-btn';
import SignIn from '../sign-in/sign-in';
import Preloader from '../preloader/preloader';
import MyListBtn from '../my-list-btn/my-list-btn';
import { setFavoriteFilmStatusAction } from '../../store/api-actions';

export default function MainHeader () : JSX.Element {
  const { promoFilm } = useAppSelector((state) => state);
  const { favoriteFilms } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const onMyListBtnClick = () => {
    if (promoFilm) {
      dispatch(setFavoriteFilmStatusAction(promoFilm));
    }
  };

  return promoFilm ?
    (
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo/>
          <SignIn/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayBtn id={promoFilm.id}/>
                <MyListBtn onClick={onMyListBtnClick} inList={promoFilm.isFavorite} count={favoriteFilms.length}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : <Preloader/>;
}
