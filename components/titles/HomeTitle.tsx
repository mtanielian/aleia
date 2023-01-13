import { Grid, Typography, Button } from '@mui/material'
import React from 'react'

const HomeTitle = () => {
  return (
    <Grid container sx={{diplay: 'flex', flexDirection:'row', my: 10}}>
      <Grid item xs={12} md={6} sx={{textAlign: 'center', mt: 2}}>
        <Typography variant='h4' component='h4'>We are an award winning interior design Agency</Typography>
      </Grid>
      <Grid item xs={12} md={6} sx={{textAlign: 'center', mt: 2}}>
        <Button variant='outlined'>
          <Typography variant='h6' component='h6'>View all properties</Typography>
          <img src='/arrow.png' alt='arrow' style={{marginLeft: 15}} />
        </Button>
      </Grid> 
    </Grid>
  )
}

export default HomeTitle