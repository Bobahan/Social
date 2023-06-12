import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/reducers/users-reducer';
import { StateType } from 'redux/store';

type formDataType = {
  search: string;
};

const Search: React.FC = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formDataType>();
  const dispatch = useDispatch();
  const { pageSize } = useSelector((state: StateType) => state.usersPage);

  const onSubmit = (searchQuery) => {
    dispatch(setFilter(searchQuery.search));
    dispatch({
      type: 'GET_USERS',
      payload: {
        currentPage: 1,
        pageSize,
        searchQuery: searchQuery.search,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('search')} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
