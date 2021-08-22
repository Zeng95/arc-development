import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'assets/images/logo.svg';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: theme.spacing(6)
  },
  logo: {
    height: '7em'
  }
}));

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
  const classes = useStyles();

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar disableGutters={true}>
            <img src={logo} alt="Company Logo" className={classes.logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

export default Header;
