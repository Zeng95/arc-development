import '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
  interface CommonColors {
    blue: string;
    orange: string;
  }
}

declare module '@material-ui/core/styles/createTypography' {
  interface FontStyle {
    tabItem: CreateCSSProperties<(value: JSSFontface, index: number, array: JSSFontface[]) => unknown>;
    estimate: CreateCSSProperties<(value: JSSFontface, index: number, array: JSSFontface[]) => unknown>;
  }
}
