import React from 'react';
import PropTypes from 'prop-types';

import {MainRoute} from './../index';

const MappedRoute = (props) => {
  const { routes } = props;

  return (
    <React.Fragment>
      {routes.map((route, i) => (<MainRoute key={i} {...route} />))}
    </React.Fragment>
  );
};

export default MappedRoute;

MappedRoute.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.instanceOf(Object)).isRequired
};
