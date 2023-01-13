import { Box, Button } from '@mui/material'
import { pages } from '../../../utils/menu'

const MenuLarge = () : JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1, ml:5, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page}
          sx={{ mt: 2, ml:5, color: 'black', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  )
}

export default MenuLarge