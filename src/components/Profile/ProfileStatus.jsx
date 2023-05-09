import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_STATUS } from '../../redux/constants';

const ProfileStatus = (props) => {
  const [status, setStatus] = useState(props.status);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const activateEditMode = () => {
    setIsEdit(true);
  };

  const onBlur = () => {
    setIsEdit(false);
    dispatch({ type: UPDATE_STATUS, status });
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const onKeyUp = (e) => {
    if (e.key === 'Enter') {
      setIsEdit(false);
      dispatch({ type: UPDATE_STATUS, status });
    }
  };

  return (
    <div>
      <span>Status: </span>
      {props.isOwner && isEdit ? (
        <input
          autoFocus
          value={status}
          onBlur={onBlur}
          onChange={onChangeStatus}
          onKeyUp={onKeyUp}
        />
      ) : (
        <span onDoubleClick={activateEditMode}>{status}</span>
      )}
    </div>
  );
};

export default ProfileStatus;
