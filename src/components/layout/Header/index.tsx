import { AppBar, Button, Grow, MenuItem, MenuList, Paper, Popper, Tab, Tabs, Toolbar, useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logo from 'assets/images/logo.svg';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';

// * Use the useScrollTrigger() hook to respond to user scroll actions.

interface ElevationScrollProps {
  children: React.ReactElement;
}

const tabList = [
  {
    id: 1,
    name: 'Home',
    path: '/',
    hasMenu: false,
    menuList: []
  },
  {
    id: 2,
    name: 'Services',
    path: '/services',
    hasMenu: true,
    menuList: ['Custom Software Development', 'Mobile App Development', 'Web Development']
  },
  {
    id: 3,
    name: 'The Revolution',
    path: '/revolution',
    hasMenu: false,
    menuList: []
  },
  {
    id: 4,
    name: 'About Us',
    path: '/about',
    hasMenu: false,
    menuList: []
  },
  {
    id: 5,
    name: 'Contact Us',
    path: '/contact',
    hasMenu: false,
    menuList: []
  }
];

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: theme.spacing(6)
  },
  logoContainer: {
    padding: 0
  },
  logo: {
    height: '8em'
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
  const history = useHistory();

  const [activeTab, setActiveTab] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLAnchorElement | null>(null);

  // * Set the active tab to value
  const handleChangeTab = (_event: React.ChangeEvent<Record<string, unknown>>, value: number) => {
    setActiveTab(value);
  };

  // * Set the active tab to 0
  const handleClickLogo = () => {
    setActiveTab(0);
  };

  // * Show: Determine the visibility of the menu
  const handleShowMenu = (event: React.MouseEvent<HTMLAnchorElement>, hasMenu: boolean) => {
    if (hasMenu) {
      setAnchorEl(event.currentTarget);
      setOpen(true);
    }
  };

  // * Hide: Determine the visibility of the menu
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    const activeTabIndex = tabList.findIndex(tabItem => tabItem.path === history.location.pathname);
    setActiveTab(activeTabIndex);
  }, [history]);

  return (
    <>
      <ElevationScroll {...props}>
        {/* fixed is the default value */}
        <AppBar position="fixed">
          <Toolbar disableGutters={true}>
            {/* Logo */}
            <Button color="primary" component={RouterLink} to="/" className={classes.logoContainer} onClick={handleClickLogo} disableRipple>
              <img src={logo} alt="Website Logo" className={classes.logo} />
            </Button>

            {/* Tabs */}
            <Tabs value={activeTab} onChange={handleChangeTab} className={classes.tabContainer} indicatorColor="primary" aria-label="tabs" selectionFollowsFocus>
              {tabList.map(tabItem => (
                <Tab
                  component={RouterLink}
                  to={tabItem.path}
                  key={tabItem.id}
                  label={tabItem.name}
                  className={classes.tabItem}
                  aria-controls={tabItem.hasMenu ? 'menu-list' : undefined}
                  aria-haspopup={tabItem.hasMenu ? 'true' : undefined}
                  onMouseEnter={(event: React.MouseEvent<HTMLAnchorElement>) => handleShowMenu(event, tabItem.hasMenu)}
                />
              ))}
            </Tabs>

            {tabList[activeTab].menuList.length > 0 && (
              <Popper open={open} anchorEl={anchorEl} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow {...TransitionProps} style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                    <Paper>
                      <MenuList autoFocusItem={open} id="menu-list" onMouseLeave={handleCloseMenu}>
                        {tabList[activeTab].menuList.map((menuItem: string) => (
                          <MenuItem key={menuItem} onClick={handleCloseMenu}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            )}

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
