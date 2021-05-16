
import React from 'react';
import Router from "Components/Router";
// import propTypes from 'prop-types';
import GlobalStyles from './GlobalStyles';

class App extends React.Component {
  render() {
    return <>
     <Router />
     <GlobalStyles />
    </>
  }
}

export default App;