import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import SignIn from '../../components/sign-in/sign-in';
import { useAppSelector } from '../../hooks';

import FilmList from '../film-list/film-list';

export default function MyList(): JSX.Element {

  const { favoriteFilms } = useAppSelector((state) => state);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">
          My list
          <span className="user-page__film-count">
            {favoriteFilms.length}
          </span>
        </h1>
        <SignIn/>
      </header>

      <section className="catalog">
        <FilmList films={favoriteFilms}/>
      </section>

      <Footer/>
    </div>
  );
}
