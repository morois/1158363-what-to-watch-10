import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';

interface PrivateProps {
  children: JSX.Element
}
export default function PrivateRoute({children} : PrivateProps): JSX.Element {
  const {autorizationStatus} = useAppSelector((state) => state);

  return (
    autorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoute.SignIn}/> );
}
