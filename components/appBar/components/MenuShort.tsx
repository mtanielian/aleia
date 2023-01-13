import { MouseEvent } from 'react'
import MenuShortItems from './MenuShortItems'
import { Box, IconButton, Menu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setOpen } from '../../../actions/MenuOptionsActions'


const MenuShort = () : JSX.Element => {
  const dispatch = useAppDispatch()
  const {anchorElNav} = useAppSelector((state) => state.menuOptions)
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    // @ts-expect-error: Unreachable code error
    dispatch(setOpen(event.currentTarget))
  }
  const handleCloseNavMenu = () => {
    // @ts-expect-error: Unreachable code error
    dispatch(setOpen(null))
  }

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent:'flex-end' }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon sx={{color:'black'}} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuShortItems />
      </Menu>
    </Box>
  )
}

export default MenuShort