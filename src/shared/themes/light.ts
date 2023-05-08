import { createTheme } from '@mui/material/styles'

const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#FF7C0E',
      dark: '#EE5026',
      light: '',
      contrastText: ''
    },
    secondary: {
      main: '#FFFFFF',
    },
  },
})

export { LightTheme }