import { Box, Container, ThemeProvider } from '@material-ui/core';
import Header from 'components/ui/Header';
import React from 'react';
import { appTheme } from 'theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <Container>
        <Box marginY={2}>
          {[...new Array(120)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
