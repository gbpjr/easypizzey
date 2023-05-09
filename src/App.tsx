// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import { ThemeProvider } from '@mui/material'
import { CssBaseline } from '@mui/material/'

import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './routes'

import { LightTheme } from './shared/themes'
import { DarkTheme } from './shared/themes'

import { AppBar } from './shared/components'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline/>
      <BrowserRouter>
        <AppBar/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
