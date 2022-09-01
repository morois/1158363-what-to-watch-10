import {memo, useMemo} from 'react';
import CatalogGenres from '../catalog-genres/catalog-genres';
import FilmList from '../../pages/film-list/film-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import {useAppDispatch, useAppSelector} from '../../hooks';
import Preloader from '../preloader/preloader';
import { checkIfHasMore } from '../../utils/common-utils';
import { FILMS_PER_PAGE } from '../../const';
import { showMore } from '../../store/action';

const Catalog = (): JSX.Element => {
  const { genre, films, page } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const genres = useMemo(() => (
    [...new Set(films.map((film) => film.genre))]
      .sort((a,b) => a.localeCompare(b))
  ), [films]);

  const filteredFilms = useMemo(
    () => films
      .filter((film) => film.genre === genre || genre === 'All genres'),
    [films, genre]
  );

  const hasMore = useMemo(() => checkIfHasMore(filteredFilms, page), [filteredFilms, page]);
  const paginatedFilms = useMemo(() => filteredFilms.slice(0, FILMS_PER_PAGE * page), [filteredFilms, page]);
  return (
    <>
      <CatalogGenres genres={genres} activeGenre={genre} />
      <FilmList films={paginatedFilms}/>
      { hasMore ? (
        <ShowMoreBtn
          onClick={() => dispatch({
            type: showMore.type
          })}
        />
      ) : null }
    </>
  );
};

const CatalogContainer = (): JSX.Element => {
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  return isDataLoaded ?
    <Catalog />
    : <Preloader/>;
};

export default memo(CatalogContainer);
