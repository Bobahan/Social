import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router';

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });

const withRouter = (Component) => {
  const RedirectComponent = (props) => {
    return props.isAuth ? <Component {...props} /> : <Navigate to={'/login'} />;
  };
  return connect(mapStateToProps)(RedirectComponent);
};

export default withRouter;
