import { Link } from 'react-router-dom'
import Box  from '@mui/material/Box'
import Typography  from '@mui/material/Typography'

const Dashboard = () => {
  return (
    <Box>
        <Typography> DASHBOARD </Typography>
        <Link to='/'>  Home  </Link>
        <Link to='/profile/1'>  Perfil  </Link>
    </Box>
  )
}

export default Dashboard