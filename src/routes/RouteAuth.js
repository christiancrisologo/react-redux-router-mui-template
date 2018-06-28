import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router';

class RouteAuth extends Component {
  static propTypes = {
    canAccess: PropTypes.bool,
    component: PropTypes.func,
    path: PropTypes.string,
    name: PropTypes.string,
    exact: PropTypes.bool,
    strict: PropTypes.bool,
  };

  render() {
    let { canAccess, component, path, name, exact, strict } = this.props;
    let routeProps = {
      path,
      component,
      name,
      exact,
      strict,
    };

    return canAccess ? <Route {...routeProps} /> : <Redirect to="/home" />;
  }
}

export default RouteAuth;
