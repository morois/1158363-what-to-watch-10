import {Link, NavLink} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

export default function SignIn () : JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.autorizationStatus);

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <NavLink to={AppRoute.MyList}>
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </NavLink>
      </li>
      <li className="user-block__item">
        {authorizationStatus === AuthorizationStatus.Auth ? <div onClick={handleLogout} className="user-block__link">Sign out</div> : <Link to={'/login'} className="user-block__link">Sign in</Link> }
      </li>
    </ul>
  );
}
