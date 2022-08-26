import MainHeader from '../../components/main-header/main-header';
import CatalogGenres from '../../components/catalog-genres/catalog-genres';
import { Film } from '../../types/films';
import FilmList from '../film-list/film-list';
import ShowMoreBtn from '../../components/show-more-btn/show-more-btn';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import Preloader from '../../components/preloader/preloader';

type MainProps = {
  films: Film[];
}

export default function CreateMainPage({ films }: MainProps): JSX.Element {

  const {isDataLoaded} = useAppSelector((state) => state);

  return (
    <>
      <MainHeader />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          { isDataLoaded ? (
            <>
              <CatalogGenres films={films} />
              <FilmList />
              <ShowMoreBtn />
            </>
          ) : (
            <Preloader/>
          ) }
        </section>

        <Footer />
      </div>
    </>
  );
}
