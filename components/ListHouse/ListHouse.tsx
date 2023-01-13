import { useContext } from 'react'
import { HouseContext } from '@/contexts/HouseContext'
import ListItem from './ListItem'
import { House } from '../../tsDefinitions/interfaces'
import { Grid } from '@mui/material'

const ListHouse = () => {
  const { houses } = useContext(HouseContext)
  return (
    <Grid container >
      {(houses as House[]).map((house) => { return (
        <ListItem key={house.image} house={house} />
      )})})
    </Grid>
  )
}

export default ListHouse