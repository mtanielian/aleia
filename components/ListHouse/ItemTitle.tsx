import PropTypes from 'prop-types'
import { Grid, Typography } from '@mui/material'

interface ItemTitleProps {
  price: string
  direction: string
}

const ItemTitle = ({ price, direction } : ItemTitleProps) : JSX.Element => {
  return (
    <Grid container sx={{display:'flex', flexDirection:'row'}}>
      <Grid item xs={6} sx={{textAlign: 'center', display:'flex', justifyContent:'flex-start'}}>
        <Typography variant="body1" component="div" sx={{fontWeight: 'bold', color:'white'}}>
          {price}
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{textAlign: 'center', display:'flex', justifyContent:'flex-end'}}>
        <Typography variant="body2" component="div" sx={{fontWeight: 'bold', color:'white'}}>
          {direction}
        </Typography>
      </Grid>
    </Grid>
  )
}

ItemTitle.propTypes = {
  title: PropTypes.string.isRequired
}


export default ItemTitle