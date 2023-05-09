import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Error from '../generic/Error';
import Input from '../generic/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { login } from '../redux/reducers/auth-reducer';

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }

  input {
    padding: 5px;
    margin: 5px 0;
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    const { email, password } = data;
    dispatch(login(email, password));
  };

  if (isAuth) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <StyledForm>
        <h1>Login</h1>
        <Input
          type="text"
          name="email"
          error={errors?.email?.message}
          register={register}
          placeholder="Email"
          validationSchema={{
            required: 'Email text is required',
            minLength: {
              value: 3,
              message: 'Please enter a minimum of 3 characters',
            },
          }}
          required
        />
        <Error>{errors.email?.message}</Error>
        <Input
          type="text"
          name="password"
          error={errors.password?.message}
          register={register}
          placeholder="Password"
          validationSchema={{
            required: 'Password text is required',
            minLength: {
              value: 3,
              message: 'Please enter a minimum of 3 characters',
            },
          }}
          required
        />
        <Error>{errors.password?.message}</Error>
        <div>{error && <Error>{error}</Error>}</div>
        <input type="submit" />
      </StyledForm>
    </form>
  );
};

export default Login;
