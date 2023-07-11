import { useDebugValue, useEffect, useState } from 'react';
import { useApiUrls } from 'api/useApiUrls';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from 'slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { useRouting } from 'api/useRouting';

export const Register = () => {
  const { contacts } = useRouting();
  const navigate = useNavigate();
  const { token } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const { signup } = useApiUrls();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = e => {
    e.preventDefault();
    const user = { name, email, password };
    console.log(user);
    dispatch(createUser(user));
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
          Name
          <input onChange={e => setName(e.currentTarget.value)}></input>
        </label>
        <label>
          Email
          <input onChange={e => setEmail(e.currentTarget.value)}></input>
        </label>
        <label>
          Password
          <input onChange={e => setPassword(e.currentTarget.value)}></input>
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
