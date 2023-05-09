import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import ProfileStatus from './ProfileStatus';
import userIMG from '../../assets/user.png';
import { useDispatch } from 'react-redux';

const StyledProfileInfo = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;

const StyledProfileBlock = styled.div`
  margin: 10px 0;
`;

const ProfileInfo = ({ profile, status, isOwner, savePhoto }) => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const onChangeFile = (e) => {
    if (e.target.files.length) {
      dispatch(savePhoto(e.target.files[0]));
    }
  };

  return (
    <StyledProfileInfo>
      {(profile.photos?.small && <img src={profile.photos.small} />) || <img src={userIMG} />}
      {isOwner && (
        <div>
          <button onClick={() => inputRef.current.click()}>Change photo</button>
          <input hidden ref={inputRef} type="file" onChange={onChangeFile} />
        </div>
      )}
      <StyledProfileBlock>
        <div>
          About me: <span>{profile.aboutMe}</span>
        </div>
        <div>
          FullName:<span>{profile.fullName}</span>
        </div>
        <div>
          Looking For A Job:
          <span>{profile.lookingForAJobDescription}</span>
        </div>
        <ProfileStatus isOwner={isOwner} status={status} />
      </StyledProfileBlock>
    </StyledProfileInfo>
  );
};

export default ProfileInfo;
