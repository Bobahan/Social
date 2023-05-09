import React from 'react';
import StyledButton from '../generic/Button';
import StyledTextarea from '../generic/Textarea';
import Post from './Post';

const MyPosts = React.memo((props) => {
  const onButtonClick = () => {
    props.addPost();
  };

  const onChangeText = (e) => {
    props.changePost(e.currentTarget.value);
  };

  return (
    <div>
      MY POSTS
      <div>
        {[...props.profilePage.posts].reverse().map((post) => (
          <Post key={post.id} title={post.title} text={post.text} />
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <StyledTextarea
          onChange={onChangeText}
          value={props.profilePage.currentText}></StyledTextarea>
        <StyledButton primary onClick={onButtonClick}>
          Add post
        </StyledButton>
      </div>
    </div>
  );
});

export default MyPosts;
