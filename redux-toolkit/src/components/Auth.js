import classes from './Auth.module.css';
import { authActions } from '../store/auth';
import { useDispatch } from 'react-redux';

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required={true}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required={true}/>
          </div>
          <button onClick={(e)=>loginHandler(e)}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
