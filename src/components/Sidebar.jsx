import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledSidebar = styled.nav`
  grid-area: Sidebar;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    text-decoration: none;
    color: black;
  }
`;

const StyledLink = styled.div`
  ${(props) =>
    props.active &&
    css`
      color: red;
    `}
`;

const Sidebar = () => {
  const [items] = useState(() => ['Profile', 'Dialogs', 'Users']);
  const [isSelected, setSelected] = useState(0);

  return (
    <StyledSidebar>
      <NavLink to={'/profile'}>Profile</NavLink>
      {/* <NavLink to={'/dialogs'}>Dialogs</NavLink> */}
      <NavLink to={'/users'}>Users</NavLink>
    </StyledSidebar>
  );
};

export default Sidebar;
