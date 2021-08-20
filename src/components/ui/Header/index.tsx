import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';
import React from 'react';

interface ElevationScrollProps {
  children: React.ReactElement;
}

const ElevationScroll = (props: ElevationScrollProps) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

const Header: React.FC = (props) => {
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar>Arc Development</Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
