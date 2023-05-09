import { createSelector } from 'reselect';

const getUserPage = (state) => state.usersPage;

export const getUsersSelector = createSelector(
  (state) => getUserPage(state).users,
  (users) => users,
);

export const getTotalCountSelector = createSelector(
  (state) => getUserPage(state).totalCount,
  (totalCount) => totalCount,
);

export const getPageSizeSelector = createSelector(
  (state) => getUserPage(state).pageSize,
  (pageSize) => pageSize,
);

export const getCurrentPageSelector = createSelector(
  (state) => getUserPage(state).currentPage,
  (currentPage) => currentPage,
);

export const getIsFetchingSelector = createSelector(
  (state) => getUserPage(state).isFetching,
  (isFetching) => isFetching,
);

export const getFollowingInProgressSelector = createSelector(
  (state) => getUserPage(state).followingInProgress,
  (followingInProgress) => followingInProgress,
);
