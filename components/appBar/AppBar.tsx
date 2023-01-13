import { AppBar, Toolbar, Container } from '@mui/material'
import MenuShort from './components/MenuShort'
import MenuLarge from './components/MenuLarge'
import ImageBrand from './components/ImageBrand'

const ToolAppBar = () : JSX.Element => {
  
  return (
    <AppBar position="static" sx={{backgroundColor:'white', boxShadow:'none'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImageBrand />
          <MenuLarge />
          <MenuShort /> 
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ToolAppBar
