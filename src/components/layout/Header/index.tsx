import { AppBar, Tab, Tabs, Toolbar, useScrollTrigger } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'assets/images/logo.svg';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: theme.spacing(6)
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tabItem: {
    ...theme.typography.tabItem,
    minWidth: 10,
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px'
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

const tabList = ['Home', 'Services', 'The Revolution', 'About Us', 'Contact Us'];

const Header: React.FC = (props) => {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleTabsChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <AppBar position="fixed">
          <Toolbar disableGutters={true}>
            <img src={logo} alt="Company Logo" className={classes.logo} />

            <Tabs value={value} onChange={handleTabsChange} className={classes.tabContainer}>
              {tabList.map((tabItem: string) => (
                <Tab key={tabItem} label={tabItem} className={classes.tabItem} />
              ))}
            </Tabs>

            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </React.Fragment>
  );
};

export default Header;
