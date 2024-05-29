import { useTheme } from "@emotion/react"
import { Box, Container, Typography } from "@mui/material"
function CreatedBy() {
    const theme=useTheme()
  return (
    <Container>
        <Box>
            <Typography sx={{fontWeight:'bold',textTransform:'capitalize',textAlign:'center'}} color={theme.palette.primary.main}>  
             created by Mhanitich
            </Typography>
        </Box>
    </Container>
  )
}

export default CreatedBy