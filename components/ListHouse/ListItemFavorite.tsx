import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton, ImageListItemBar } from '@mui/material'

const ListItemFavorite = () => {
  return (
    <ImageListItemBar
      sx={{backgroundColor: 'rgba(255, 255, 255, 0)'}}
      position="top"
      actionIcon={
        <IconButton
          key="heart"
          sx={{ color: 'white' }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      }
      actionPosition="right"
    />
  )
}

export default ListItemFavorite