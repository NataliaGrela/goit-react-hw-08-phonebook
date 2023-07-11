import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRouting } from 'api/useRouting';
import { createUser } from 'slices/userSlice';
import { login } from 'slices/userSlice';

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
    console.log(user);
    dispatch(login(user));
  };
  console.log(token);
  useEffect(() => {
    if (token) {
      navigate(`/${contacts}/`);
    }
  }, [token]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input onChange={e => setEmail(e.currentTarget.value)}></input>
        </label>
        <label>
          Password
          <input onChange={e => setPassword(e.currentTarget.value)}></input>
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
