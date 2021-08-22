import { createTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

const theme = createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue,
      contrastText: '#fff'
    },
    secondary: {
      main: arcOrange,
      contrastText: '#fff'
    },
    text: {
      primary: '#fff'
    },
    background: {
      default: '#1C202B'
    }
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  }
});

/**
 * The theme for this app
 */
export const appTheme = createTheme({
  ...theme,
  breakpoints: {
    values: {
      xs: 0,
      sm: 425,
      md: 768,
      lg: 1080,
      xl: 1440
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true
    },
    MuiButton: {
      disableElevation: true,
      disableRipple: true,
      disableTouchRipple: true,
      disableFocusRipple: true
    },
    MuiIconButton: {
      disableRipple: true,
      disableTouchRipple: true,
      disableFocusRipple: true
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        borderRadius: 10,
        '&:hover': {
          backgroundColor: theme.palette.primary.main
        }
      }
    }
  }
});

export const appThemeTeal = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#3C9EAF',
      light: 'rgba(60, 158, 175, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});

export const appThemePink = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#d1596e',
      light: 'rgba(209, 89, 110, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});

export const appThemeGreen = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#009473',
      light: 'rgba(0, 148, 115, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});

export const appThemePurple = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#c758a3',
      light: 'rgba(199, 88, 163, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});

export const appThemeBlue = createTheme({
  ...appTheme,
  palette: {
    primary: {
      main: '#819edf',
      light: 'rgba(129, 158, 223, 0.6)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#657179',
      light: '#939fa8'
    },
    background: {
      default: '#1C202B'
    },
    text: {
      primary: '#ffffff'
    }
  }
});
