import React from 'react';
import MainHeader from '../../components/main-header/main-header';
import CatalogGenres from '../../components/catalog-genres/catalog-genres';
import {Film} from '../../types/films';
import FilmList from '../film-list/film-list';
import ShowMoreBtn from '../../components/show-more-btn/show-more-btn';
import Footer from '../../components/footer/footer';


type MainProps = {
  films: Film[];
}

export default function CreateMainPage ({films}: MainProps) : JSX.Element {
  return (
    <>
      <MainHeader/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenres/>
          <FilmList films={films}/>
          <ShowMoreBtn/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
