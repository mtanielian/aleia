import AppBar from '../components/appBar/AppBar'
import { Grid } from '@mui/material'

interface Props {
  children: React.ReactNode
}

const MainLayout = ({children}: Props ) => {
  return (
    <Grid container sx={{display:'flex'}}>
      <Grid item xs={12}>
        <AppBar />
      </Grid>
      <Grid item xs={12} sx={{mt:10}}>
        {children}
      </Grid>
    </Grid>
  )
}

export default MainLayout