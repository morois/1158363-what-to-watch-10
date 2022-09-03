import {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import DetailsHeader from '../../components/details-header/details-header';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Tabs from '../../components/tabs/tabs';
import Footer from '../../components/footer/footer';
import SimilarFilms from '../../components/similar-films/similar-films';
import {fetchCommentsAction} from '../../store/api-actions';
import PageNotFound from '../page-not-found/page-not-found';
import Preloader from '../../components/preloader/preloader';
import PlayBtn from '../../components/play-btn/play-btn';
import MyListBtn from '../../components/my-list-btn/my-list-btn';

export default function FilmPage () : JSX.Element {
  const { films, comments } = useAppSelector((state) => state);
  const isDataLoading = useAppSelector((state) => state.isDataLoaded);
  const dispatch = useAppDispatch();
  const {id} = useParams();
  const film = films.find((e) => String(e.id) === id);

  useEffect(() => {
    if (film) {
      dispatch(fetchCommentsAction(film.id));
    }
  }, [dispatch, film]);

  if (!isDataLoading) {
    return <Preloader/>;
  }

  if (!film) {
    return <PageNotFound/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <DetailsHeader />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayBtn/>
                <MyListBtn/>
                <Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <Tabs film={film} comments={comments} />
      </section>
      <div className="page-content">
        <SimilarFilms genre={film.genre}/>
        <Footer />
      </div>
    </>
  );
}
