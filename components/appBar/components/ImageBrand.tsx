import { Typography } from '@mui/material'

const ImageBrand = () : JSX.Element => {
  return (
    <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
        mr: 2,
        display: 'flex',
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      <img src="/logoBrand.png" alt="Aleia Brand" width="auto" height="auto" />
    </Typography>
  )
}

export default ImageBrand