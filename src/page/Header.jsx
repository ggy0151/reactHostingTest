import { AppBar, Typography } from '@mui/material'

function Header() {
  return (
    <div className="Header">
      <AppBar
        style={{ width: '100vw', height: '20px', backgroundColor: 'blue' }}
        position="fixed"
      >
        <Typography variant="h3" color="white" align="center" nowrap="true">
          Mega Field Festival
        </Typography>
      </AppBar>
    </div>
  )
}

export default Header
