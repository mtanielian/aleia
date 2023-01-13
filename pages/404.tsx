import { Box, Typography } from '@mui/material'
import styles from './404.module.css'

const Custom404 = () : JSX.Element => {
  console.log(styles.BoxContainer)
  return (
    <Box 
      className={styles.BoxContainer}
      sx={{ flexDirection: { xs: 'column', sm: 'row'} }}
    >
      <Typography variant="h1" component='h1' fontSize={80} fontWeight={200}>404 |</Typography>
      <Typography marginLeft={2}>Página no encontrada</Typography>
    </Box>
  )
}

export default Custom404