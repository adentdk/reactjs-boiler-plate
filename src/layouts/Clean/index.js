import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { MappedRoute } from '../../routes/components';


export default class Clean extends PureComponent {
  static propTypes = {
    child: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(Object)
    ])
  }

  render () {
    const {child} = this.props;

    return (
      <div>
         <MappedRoute
          routes={child}
        />
      </div>
    )
  }
}