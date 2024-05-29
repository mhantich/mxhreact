import { Box, Button, Container, Typography, styled } from "@mui/material";
import demoData from "../data.js";
import { useTheme } from "@emotion/react";
function About() {
  const theme = useTheme();
  const CustomButton = styled(Button)(() => ({
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.text.white,
    clipPath: "polygon(0 0, 100% 0%, 90% 100%, 0% 100%)",
    margin: "0 10px",
    width: "fit-content",
  }));
  return (
    <Container>
      <Box
       mt={5}
        sx={{
          backgroundColor: "background.paper",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2rem",
          clipPath: "polygon(0 0, 100% 0%, 90% 100%, 0% 100%)",
          overflow:'hidden',
          paddingBlock:{xs:'1rem',md:'4rem'}
        }}
      >
        <Box
        p={4}
          sx={{
            gap: "2rem",
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            justifyContent:'center'
            }}
          flex={1}
        >
          <Typography variant="h2">{demoData.aboutSection.title}</Typography>
          <Typography variant="body1" mt={2}>
            {demoData.aboutSection.content}
          </Typography>
          <CustomButton variant="contained">View More</CustomButton>
        </Box>
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
           
            height:'25rem',
            overflow:'hidden'
          }}
        >
          <img
            src="re1.png"
            alt="Description"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default About;
