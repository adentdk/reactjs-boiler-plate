import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const RenderedRoute = (Component, child) => (props) => {
  // const state = store.getState();
  const token = localStorage.getItem('token');
  const { isLogin } = /*state.login;*/ {isLogin: true}
  // eslint-disable-next-line react/prop-types
  const { location } = props;
  const { pathname } = location;
  if (pathname === '/') {
    if (isLogin && token !== null) {
      return (<Redirect to="/dashboard" />);
    } return (<Redirect to="/login" />);
  }
  if (token === null && !isLogin && pathname !== '/login') {
    return (<Redirect to="/login" />);
  } else if (token !== null && isLogin && pathname !== '/dashboard' && child.length <= 0) {
    return (<Component {...props} child={child} />);
  } else if (token !== null && pathname === '/login') {
    return (<Redirect to="/dashboard" />);
  }
  return (<Component {...props} child={child} />);
};

const MainRouter = ({ path, component, title, exact = false, child = [] }) => (
  <Route
    exact={exact}
    path={path}
    render={RenderedRoute(component, child, title)}
  />
);


export default MainRouter;

MainRouter.propTypes = {
  child: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(Object)
  ]),
  component: PropTypes.instanceOf(Object).isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};