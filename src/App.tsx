import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './page/Login';
import { auth } from './redux/reducers/auth-reducer';
import { Preloader } from './generic/Preloader';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

const AppWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'Header Header Header'
    'Sidebar Content Content';
  grid-template-rows: auto;
  grid-template-columns: 2fr 10fr;
  grid-gap: 0.5em;
`;

const StyledContent = styled.div`
  grid-area: Content;
  background-color: yellow;
  padding: 1em;
`;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <AppWrapper>
      <Header />
      <Sidebar />
      <StyledContent>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/profile/:id?" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </StyledContent>
    </AppWrapper>
  );
};

export default App;
