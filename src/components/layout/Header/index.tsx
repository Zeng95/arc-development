import { AppBar, Button, Tab, Tabs, Toolbar, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'assets/images/logo.svg';
import React, { useState } from 'react';

// * Use the useScrollTrigger() hook to respond to user scroll actions.

interface ElevationScrollProps {
  children: React.ReactElement;
}

const tabList = ['Home', 'Services', 'The Revolution', 'About Us', 'Contact Us'];

const useStyles = makeStyles(theme => ({
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

const ElevationScroll = (props: ElevationScrollProps) => {
  const trigger = useScrollTrigger({
    // * Disable the hysteresis. Ignore the scroll direction when determining the trigger value.
    disableHysteresis: true,
    // * Defaults to 100. Change the trigger value when the vertical scroll strictly crosses this threshold (exclusive).
    threshold: 0
  });

  return React.cloneElement(props.children, {
    // * The class attribute .MuiPaper-elevation4 or .MuiPaper-elevation0 (box-shadow)
    elevation: trigger ? 4 : 0
  });
};

const Header: React.FC = props => {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabsChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <ElevationScroll {...props}>
        {/* fixed is the default value */}
        <AppBar position="fixed">
          <Toolbar disableGutters={true}>
            {/* Logo */}
            <img src={logo} alt="Website Logo" className={classes.logo} />

            {/* Tabs */}
            <Tabs value={selectedTab} onChange={handleTabsChange} className={classes.tabContainer} indicatorColor="primary">
              {tabList.map((tabItem: string) => (
                <Tab key={tabItem} label={tabItem} className={classes.tabItem} />
              ))}
            </Tabs>

            {/* 按钮 */}
            <Button variant="contained" color="secondary" className={classes.button}>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
};

export default Header;
