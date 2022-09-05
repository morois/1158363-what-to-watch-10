import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import Preloader from '../preloader/preloader';

interface PrivateProps {
  children: JSX.Element
}
export default function PrivateRoute({children} : PrivateProps): JSX.Element {
  const {autorizationStatus} = useAppSelector((state) => state);

  switch (autorizationStatus) {
    case AuthorizationStatus.Auth:
      return children;
    case AuthorizationStatus.NoAuth:
      return <Navigate to={AppRoute.SignIn}/>;
    default:
      return <Preloader/>;
  }
}
