import { ThemeProvider } from '@material-ui/core';
import Header from 'components/layout/Header';
import Home from 'pages/Home';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { appTheme } from 'theme';

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={appTheme}>
        <Header />

        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/services" component={Home}></Route>
          <Route exact path="/revolution" component={Home}></Route>
          <Route exact path="/about" component={Home}></Route>
          <Route exact path="/contact" component={Home}></Route>
          <Route exact path="/custom_software" component={Home}></Route>
          <Route exact path="/mobile_apps" component={Home}></Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
