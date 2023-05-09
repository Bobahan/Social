import { connect, useDispatch } from 'react-redux';
import {
  setUsers,
  follow,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  followingProgress,
  getUsers,
} from '../../redux/reducers/users-reducer';
import React, { useEffect } from 'react';
import Users from './Users';
import { Preloader } from '../../generic/Preloader';
import * as users from '../../redux/reducers/users-selector';

const UsersContainer = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    props.setIsFetching(true);
    dispatch({
      type: 'GET_USERS',
      payload: {
        currentPage: props.usersPage.currentPage,
        pageSize: props.usersPage.pageSize,
      },
    });
    props.setIsFetching(false);
  }, []);

  const onChangePage = (page) => {
    props.setCurrentPage(page);
    props.setIsFetching(true);
    dispatch({
      type: 'GET_USERS',
      payload: {
        currentPage: page,
        pageSize: props.usersPage.pageSize,
      },
    });
    props.setIsFetching(false);
  };

  return (
    <>
      {props.usersPage.isFetching ? (
        <Preloader />
      ) : (
        <Users
          usersPage={props.usersPage}
          onChangePage={onChangePage}
          unfollow={unfollow}
          follow={follow}
          followingProgress={followingProgress}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    usersPage: {
      users: users.getUsersSelector(state),
      totalCount: users.getTotalCountSelector(state),
      pageSize: users.getPageSizeSelector(state),
      currentPage: users.getCurrentPageSelector(state),
      isFetching: users.getIsFetchingSelector(state),
      followingInProgress: users.getFollowingInProgressSelector(state),
    },
  };
};

export default connect(mapStateToProps, {
  setUsers,
  follow,
  unfollow,
  setTotalUsersCount,
  setCurrentPage,
  setIsFetching,
  followingProgress,
  getUsers,
})(UsersContainer);
