import React from 'react';
import {Loading} from './../../components';

const Lazyload = (Component, fallback = <Loading />) => () => {
  return (
    <React.Suspense fallback={fallback}>
      <Component />
    </React.Suspense>
  )
}

export default Lazyload;
