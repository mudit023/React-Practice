import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  const authSelector = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authSelector && 
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
