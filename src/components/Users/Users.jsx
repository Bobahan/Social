import React from 'react';
import styled, { css } from 'styled-components';
import Pagination from './Pagination';
import IMG from '../../assets/user.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const StyledUsers = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid black;

  img {
    margin-left: 10px;
  }

  div {
    flex-grow: 1;
    cursor: pointer;
  }
`;

const StyledItems = styled.div`
  padding: 10px;
  text-align: center;
  ${(props) =>
    props.self &&
    css`
      grid-column-start: 1;
      grid-column-end: 3;
    `};
`;

const StyledUsersInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 40px;
  align-items: center;
  border: 1px solid black;
`;

const Users = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const follow = (userID) => {
    props.followingProgress(true, userID);
    dispatch(props.follow(userID));
    props.followingProgress(false, userID);
  };

  const unfollow = (userID) => {
    props.followingProgress(true, userID);
    dispatch(props.unfollow(userID));
    props.followingProgress(false, userID);
  };

  return (
    <StyledItems>
      <h1>Users</h1>
      <div>
        {props.usersPage.users.map((user) => (
          <StyledUsersInfo key={user.id}>
            <StyledUsers>
              <img
                src={!user.photos.large ? IMG : user.photos.large}
                style={{ width: '30px', height: '30px' }}
              />
              <div onClick={() => navigate(`/profile/${user.id}`)}>{user.name}</div>
            </StyledUsers>
            <div>
              {user.followed ? (
                <button
                  disabled={props.usersPage.followingInProgress.some((id) => id === user.id)}
                  style={{ cursor: 'pointer' }}
                  onClick={() => unfollow(user.id)}>
                  Follow
                </button>
              ) : (
                <button
                  disabled={props.usersPage.followingInProgress.some((id) => id === user.id)}
                  style={{ cursor: 'pointer' }}
                  onClick={() => follow(user.id)}>
                  Unfollow
                </button>
              )}
            </div>
          </StyledUsersInfo>
        ))}
      </div>
      <Pagination
        totalCount={props.usersPage.totalCount}
        pageSize={props.usersPage.pageSize}
        currentPage={props.usersPage.currentPage}
        onChangePage={props.onChangePage}
      />
    </StyledItems>
  );
};

export default Users;
