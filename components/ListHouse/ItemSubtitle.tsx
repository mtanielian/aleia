import PropTypes from 'prop-types'
import { Stack, Typography } from '@mui/material'

interface ItemSubtitleProps {
  direction: string
}

const ItemSubtitle = ({ direction } : ItemSubtitleProps) => {
  return (
    <Stack>
      <Typography variant="body1" component="div" aria-label='height'>
        {direction}
      </Typography>
    </Stack>
  )
}

ItemSubtitle.propTypes = {
  appearance: PropTypes.object.isRequired
}

export default ItemSubtitle