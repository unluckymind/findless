import React from 'react';
import { hot } from 'react-hot-loader';
import 'assets/scss/App.scss';
import AboutPage from 'components/page/about';
import HomePage from 'components/page/home';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
