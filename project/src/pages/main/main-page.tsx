import React from 'react';
import MainHeader from '../../components/main-header/main-header';
import CatalogGenres from '../../components/catalog-genres/catalog-genres';
import {Film} from '../../types/films';
import FilmList from '../film-list/film-list';
import ShowMoreBtn from '../../components/show-more-btn/show-more-btn';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';

type MainProps = {
  films: Film[];
}

export default function CreateMainPage ({films}: MainProps) : JSX.Element {
  const filmList = useAppSelector((state) => state.films);

  return (
    <>
      <MainHeader/>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <CatalogGenres films={films}/>
          <FilmList films={filmList}/>
          <ShowMoreBtn/>
        </section>

        <Footer/>
      </div>
    </>
  );
}
