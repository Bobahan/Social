import { connect } from 'react-redux';
import { addPostActionCreator, changeTextActionCreator } from '../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePost: (text) => {
      dispatch(changeTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default DialogsContainer;
