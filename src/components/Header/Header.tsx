import React from 'react';
import { Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import StyledFlex from '../../generic/Flex';
import { logout } from '../../redux/reducers/auth-reducer';
import { StateType } from 'redux/store';

const StyledHeader = styled.header`
  grid-area: Header;
  background-color: red;
  padding: 1em;
`;

const StyledLogo = styled.div`
  font-size: 2em;
  border-bottom: 2px solid black;
  cursor: pointer;
`;

const StyledText = styled.div`
  margin: 0.5em;
  color: white;

  a {
    color: white;
    text-decoration: none;
  }
`;

const Header: React.FC<mapStateToPropsType> = (props) => {
  debugger;
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <StyledHeader>
      <StyledFlex justify="space-between" align="center">
        <StyledLogo>Besocial!</StyledLogo>
        <StyledFlex>
          <StyledText>Contacts</StyledText>
          <StyledText>Help</StyledText>
          <StyledText>
            {props.isAuth ? (
              <Link to={'/login'} onClick={onLogout}>
                Logout
              </Link>
            ) : (
              <Link to={'/login'}>Login</Link>
            )}
          </StyledText>
        </StyledFlex>
      </StyledFlex>
    </StyledHeader>
  );
};

type mapStateToPropsType = {
  id: number;
  login: string;
  email: string;
  isAuth: boolean;
};

const mapStateToProps = (state: StateType) => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  };
};

export default connect<mapStateToPropsType>(mapStateToProps)(Header);
