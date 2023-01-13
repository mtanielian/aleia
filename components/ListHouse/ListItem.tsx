import ItemTitle from './ItemTitle'
import { Button, Grid, ImageListItem, ImageListItemBar } from '@mui/material'
import styles from './ListItem.module.css'
import { House } from '@/tsDefinitions/interfaces'
import ListItemFavorite from './ListItemFavorite'



interface Props {
  house: House
}

const ListItem = ({ house }: Props) : JSX.Element => {
  const { image, price, direction } = house
  return (
    <>
      <Grid item md={4} xs={12} className={styles.houseItem} mb={2}>
        <ImageListItem sx={{width: '90%', cursor: 'pointer'}}  aria-label='areaClick' >
          <img src={`/images/${image}`} alt={`house in ${direction}`} loading="lazy" style={{borderRadius: '10px'}} />
          <ListItemFavorite />
          <ImageListItemBar
            sx={{backgroundColor: 'rgba(255, 255, 255, 0)'}}
            title={<ItemTitle price={price} direction={direction} />}
          />
        </ImageListItem>
      </Grid>
      <Grid item xs={12} sx={{ display: { xs: 'flex', md: 'none', justifyContent: 'center'}, mb:4 }}>
        <Button variant='contained'> SHOW DETAILS </Button>
      </Grid>
    </>
  )
}

export default ListItem





