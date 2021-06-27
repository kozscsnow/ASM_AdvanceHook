import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { GlobalActions } from '../../redux/rootAction';
import './LoginForm.css';

// const history = createBrowserHistory();
function LoginForm(props) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const validate = () => {
    let errorMessage = '';

    if (username !== 'admin' || password !== 'admin') {
      errorMessage = 'Your User or Password is Invalid';
    }
    if (errorMessage) {
      setErrorMessage(errorMessage);
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isFormValid = validate();
    if (isFormValid) {
      history.push('/');
      //Clear errorMessage
      setErrorMessage('');
    }
  };

  const handleGetUsername = (e) => {
    setUsername(e.target.value);
    localStorage.setItem('username', e.target.value);
  };
  const handleGetPassword = (e) => {
    setPassword(e.target.value);
    localStorage.setItem('password', e.target.value);
  };
  //Fake Loading
  useEffect(() => {
    const loadingFake = setTimeout(() => {
      dispatch(GlobalActions.setIsLoading(false));
    }, 500);
    return () => {
      clearTimeout(loadingFake);
    };
  });
  return (
    <div>
      <div className="login__container ">
        <form className=" login-form" onSubmit={handleSubmit}>
          <div className="form-group form-group-id">
            <label id="form-id" htmlFor="form-id">
              User Name
            </label>
            <input
              type="text"
              placeholder="Username"
              className="form-id form-control text-center"
              id="form-id"
              name="form-id"
              value={username}
              onChange={handleGetUsername}
            ></input>
          </div>
          <div className="form-group form-group-password">
            <label id="form-password" htmlFor="form-password">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="form-password form-control text-center"
              id="form-password"
              name="form-password"
              value={password}
              onChange={handleGetPassword}
            ></input>
            <small className="form-valid form-text text-danger">
              {errorMessage}
            </small>
          </div>
          <div className="form-group">
            <button type="submit" className="login-btn">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
