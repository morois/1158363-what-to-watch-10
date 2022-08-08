import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import SignIn from '../../components/sign-in/sign-in';
import { Films } from '../../types/films';
import FilmList from '../film-list/film-list';

type MyListProps = {
  films: Films;
}

export default function MyList({films} : MyListProps): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <SignIn/>
      </header>

      <section className="catalog">
        <FilmList films = {films}/>
      </section>

      <Footer/>
    </div>
  );
}
