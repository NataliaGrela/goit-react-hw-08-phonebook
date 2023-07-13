import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRouting } from 'api/useRouting';
import { login } from 'slices/userSlice';
import css from './Login.module.css';

export const Login = () => {
  const { contacts } = useRouting();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    const user = { email, password };
    dispatch(login(user));
  };

  useEffect(() => {
    if (token) {
      navigate(`/${contacts}/`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className={css.loginContainer}>
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <label className={css.loginLabel}>
          Email
          <input
            className={css.loginInput}
            onChange={e => setEmail(e.currentTarget.value)}
          ></input>
        </label>
        <label className={css.loginLabel}>
          Password
          <input
            className={css.loginInput}
            onChange={e => setPassword(e.currentTarget.value)}
          ></input>
        </label>
        <button className={css.loginBtn} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
};
