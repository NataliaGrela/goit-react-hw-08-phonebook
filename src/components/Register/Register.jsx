import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useRouting } from 'api/useRouting';
import css from './Register.module.css';

export const Register = () => {
  const { contacts } = useRouting();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    dispatch(createUser(user));
  };
  useEffect(() => {
    if (token) {
      navigate(`/${contacts}/`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className={css.registerContainer}>
      <form className={css.registerForm} onSubmit={handleSubmit}>
        <label className={css.registerLabel}>
          Name
          <input
            className={css.registerInput}
            onChange={e => setName(e.currentTarget.value)}
          ></input>
        </label>
        <label className={css.registerLabel}>
          Email
          <input
            className={css.registerInput}
            onChange={e => setEmail(e.currentTarget.value)}
          ></input>
        </label>
        <label className={css.registerLabel}>
          Password
          <input
            className={css.registerInput}
            onChange={e => setPassword(e.currentTarget.value)}
          ></input>
        </label>
        <button className={css.registerBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
