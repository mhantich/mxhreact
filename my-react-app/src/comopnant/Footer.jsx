import { useTheme } from "@emotion/react"
import { Box, Grid, Typography } from "@mui/material"


function Footer() {
    const theme= useTheme()
  return (
    <footer >
            <Box p={5} sx={{backgroundColor:'black',color:'white'}}>
       <Grid sx={{justifyContent:'center'}}  container spacing={4} mt={2}>
         
              <Grid  item xs={12} md={3} >

                  <Box>
                  <Typography variant="h6" color={theme.palette.primary.main} align="center">Home</Typography>
                    <Typography variant="body2" align="center">Lorem ipsum dolor sit amet.</Typography>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    </Box>
                </Box>
              </Grid>
              <Grid  item xs={12} md={3} >

                  <Box>
                  <Typography variant="h6" align="center">About</Typography>
                    <Typography variant="body2" align="center">Lorem ipsum dolor sit amet.</Typography>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    </Box>
                </Box>
              </Grid>

              <Grid  item xs={12} md={3} >

                  <Box>
                  <Typography variant="h6" align="center">Help</Typography>
                    <Typography variant="body2" align="center">Lorem ipsum dolor sit amet.</Typography>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    </Box>
          
                </Box>
              </Grid>
              <Grid  item xs={12} md={3} >

                  <Box>
                  <Typography variant="h6" align="center">Contact Us</Typography>
                    <Typography variant="body2" align="center">Lorem ipsum dolor sit amet.</Typography>
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    <Typography variant="body3" align="center" color="textSecondary">Lorem, ipsum.</Typography>
                    </Box>
                </Box>
              </Grid>
    
        </Grid>
        </Box>
    </footer>
  )
}

export default Footer