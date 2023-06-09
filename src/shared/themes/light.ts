import { createTheme } from '@mui/material/styles'

const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#FF7C0E',
      dark: '#EE5026',
      light: '#FEAC28',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#2B3743',
      dark: '#333333',
      light: '#526A82',
      contrastText: '#FFFFFF'
    },
    background: {
      default: 'FAFAFA',
      paper: '#FFFFFF'
    }
  },
})

export { LightTheme }