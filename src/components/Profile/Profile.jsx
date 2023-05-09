import React from 'react';
import ProfileInfo from './ProfileInfo';
import MyPostContainer from '../MyPostContainer';
import Error from '../../generic/Error';

const Profile = (props) => {
  if (props.error) {
    return <Error>{props.error}</Error>;
  }

  return (
    <>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
      />
      {/* <MyPostContainer /> */}
    </>
  );
};

export default Profile;
