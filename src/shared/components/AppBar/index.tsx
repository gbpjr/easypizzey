import { AppBar as MUIAppBar } from '@mui/material'

import { 
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Switch
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

const AppBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <MUIAppBar position="absolute">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EasyPizzey
          </Typography>
          <Switch {...label} />
        </Toolbar>
      </MUIAppBar>
    </Box>
  )
}

export default AppBar