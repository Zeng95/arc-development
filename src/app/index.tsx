import { ThemeProvider } from '@material-ui/core';
import Header from 'components/layout/Header';
import React from 'react';
import { appTheme } from 'theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
    </ThemeProvider>
  );
};

export default App;
