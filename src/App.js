import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import DefaultTheme from './themes/DefaultTheme';
import MainWrapper from './common/Wrappers/MainWrapper';
import { getPageTitle } from './AppReducers';
import { changePageTitle } from './AppActions';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={DefaultTheme}>
        <CssBaseline />
        <Fragment>
          <Route path="/" component={MainWrapper} />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  pageTitle: getPageTitle(state),
});

const mapDispatchToProps = dispatch => ({
  changePageTitle: title => dispatch(changePageTitle(title)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
