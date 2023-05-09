import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Profile from './Profile';
import { savePhoto, setId, setUserProfile } from '../../redux/reducers/profile-reducer';
import { usePrevious } from '../../hooks/usePrevious';

const ProfileContainer = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const prevId = usePrevious(id);

  useEffect(() => {
    if (id !== prevId) {
      dispatch(setId(id));
    } else {
      dispatch(setId(26120));
    }
  }, [id]);

  return <Profile isOwner={!id} {...props} savePhoto={savePhoto} />;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    error: state.profilePage.error,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    id: state.auth.id,
  };
};
export default connect(mapStateToProps, { setUserProfile, setId, savePhoto })(ProfileContainer);
