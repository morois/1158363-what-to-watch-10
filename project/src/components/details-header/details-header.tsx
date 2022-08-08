import Logo from '../logo/logo';
import SignIn from '../sign-in/sign-in';

export default function DetailsHeader () : JSX.Element {
  return (
    <header className="page-header film-card__head">
      <Logo/>
      <SignIn/>
    </header>
  );
}
