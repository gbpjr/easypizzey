import { createTheme } from '@mui/material/styles'

const DarkTheme = createTheme({
  palette: {
    primary: {
      main: '#FF7C0E',
      dark: '#000000',
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
      default: '#202124',
      paper: '#121212'
    }
  },
})

export { DarkTheme }