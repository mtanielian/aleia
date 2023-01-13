import { useAppDispatch } from '@/hooks/useRedux'
import { setOpen } from '@/actions/MenuOptionsActions'
import { pages } from '../../../utils/menu'
import { MenuItem, Typography } from '@mui/material'

const MenuShortItems = () : JSX.Element => {
  const dispatch = useAppDispatch()
  
  const handleCloseNavMenu = () => { 
    // @ts-expect-error: Unreachable code error
    dispatch(setOpen(null))
  }

  return(
    <>
      {pages.map((page) => (
        <MenuItem key={page} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </>
  )
}

export default MenuShortItems