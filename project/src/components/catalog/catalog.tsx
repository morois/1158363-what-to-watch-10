import {memo, useMemo} from 'react';
import CatalogGenres from '../catalog-genres/catalog-genres';
import FilmList from '../../pages/film-list/film-list';
import ShowMoreBtn from '../show-more-btn/show-more-btn';
import {useAppSelector} from '../../hooks';
import Preloader from '../preloader/preloader';

const Catalog = (): JSX.Element => {
  const { genre, films } = useAppSelector((state) => state);
  const genres = useMemo(() => (
    [...new Set(films.map((film) => film.genre))]
      .sort((a,b) => a.localeCompare(b))
  ), [films]);
  const filteredFilms = useMemo(
    () => films
      .filter((film) => film.genre === genre || genre === 'All genres')
      .sort((a, b) => a.name.localeCompare(b.name)),
    [films, genre]
  );
  return (
    <>
      <CatalogGenres genres={genres} activeGenre={genre} />
      <FilmList films={filteredFilms}/>
    </>
  );
};

const CatalogContainer = (): JSX.Element => {
  const isDataLoaded = useAppSelector((state) => state.isDataLoaded);
  return isDataLoaded ? (
    <>
      <Catalog />
      <ShowMoreBtn />
    </>
  ) : <Preloader/>;
};

export default memo(CatalogContainer);
