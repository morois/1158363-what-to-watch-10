import MainHeader from '../../components/main-header/main-header';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';

export default function CreateMainPage(): JSX.Element {

  return (
    <>
      <MainHeader />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Catalog/>
        </section>

        <Footer />
      </div>
    </>
  );
}
