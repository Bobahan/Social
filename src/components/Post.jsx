import React from 'react';
import styled from 'styled-components';
import PostIMG from '../assets/post.jpg';

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Post = (props) => {
  return (
    <StyledPost>
      <img style={{ width: '100px' }} src={PostIMG} />
      <div>{props.title}</div>
      <span>{props.text}</span>
    </StyledPost>
  );
};

export default Post;
