import { Box, Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { handleAmountChange, handleScoreChange } from '../redux/actions'

const FinalScreen = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { score } = useSelector((state) => state)

  const handleBackToSettings = () => {
    dispatch(handleScoreChange(0))
    dispatch(handleAmountChange(50))
    history.push('/')
  }

  return (
    <Box mt={30}>
      <Typography variant='h3' fontWeight='bold' mb={3}>
        Final Score {score}{' '}
      </Typography>
      <Button onClick={handleBackToSettings} variant='outlined'>
        Back to Settings
      </Button>
    </Box>
  )
}

export default FinalScreen
