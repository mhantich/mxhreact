import { Box, Button, Container, Typography } from "@mui/material";
import demoData from "../data.js";
import { useTheme } from "@emotion/react";

function MainHero() {
    const theme = useTheme();

  return (
    <Container>
    <Box sx={{ display: "flex", alignItems: "center", height: "100dvh" }}>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ width: "500px", height: "700px", flex: 1, alignSelf: "flex-end" }}
        mt={4}
      >
        <img src="rem.png" />
      </Box>
      <Box spacing={5} sx={{display:"flex", flex: 1,gap:'2rem' ,lineHeight:'50px',flexDirection:'column'}} mt={4} >
      <Box>
        <Typography variant="title" align="center">
             Mineral 
        </Typography>
        <br />
        <Typography variant="title" align="center">
            Bath Salts
        </Typography>
       </Box>
        <Typography variant="body1" align="left">
          {demoData.heroSection.subtitle}
        </Typography>
        <Box display="flex" justifyContent="start" mt={2}>
         
            <Button
            
              variant='contained'
              sx={{color:theme.palette.text.white, clipPath: 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%);', } }
              style={{ margin: "0 10px" }}
            >
             Buy Now
            </Button>
            <Button
              variant='contained'
              sx={{backgroundColor:theme.palette.background.dark ,color:theme.palette.text.white, clipPath: 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%);',} }
              style={{ margin: "0 10px" }}
            >
               Explore More
            </Button>

        </Box>
      </Box>
    </Box>

    </Container>
  );
}

export default MainHero;
