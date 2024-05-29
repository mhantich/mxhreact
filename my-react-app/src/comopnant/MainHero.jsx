
import { Box, Button, Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import demoData from "../data.js";
import Supports from "./Supports.jsx";
function MainHero() {
    const theme = useTheme();
    const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Container >
            <Box 
                sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    width:'100',
                    height: "100dvh", 
                    overflow:'hidden',
                    flexDirection: { xs: "column", md: "row" },
                    textAlign: { xs: "center", md: "left" },
                    paddingBlockStart:{xs:'4rem',md:'none'}
                }}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems={'end'}
                     
                    sx={{ 
                        width: { xs: "100%", md: "500px" }, 
                        height: { xs: "auto", md: "100%" }, 
                         display:{xs:'none',md:'block'},
                        flex: 1, 
                        alignSelf: { xs: "center", md: "flex-start" } 
                    }}
                    mt={{ xs: 2, md: 4 }}
                >
                    <img src="rem.png" style={{ width: "100%", height: "auto" }} />
                </Box>
                <Box 
                    sx={{
                        display: "flex", 
                        flexDirection: "column", 
                        gap: "2rem", 
                        lineHeight: "50px", 
                        flex: 1,
                        mt: { xs: 2, md: 4 },
                        justifyContent:{ xs: "center", md: "start" },
                        textAlign: { xs: "center", md: "left" }
                    }}
                >
                    <Box>
                        <Typography variant={isMediumUp ? "title" : "h2"}>
                            Mineral 
                        </Typography>
                        <Typography variant={isMediumUp ? "title" : "h2"}>
                            Bath Salts
                        </Typography>
                    </Box>
                    <Typography variant="body1">
                        {demoData.heroSection.subtitle}
                    </Typography>
                    <Box display="flex" justifyContent={{ xs: "center", md: "start" }} mt={2}>
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
            <Supports/>
        </Container>
    );
}

export default MainHero;
