import { useTheme } from "@emotion/react";

import { Box, Container, Typography, Button } from "@mui/material";
import demoData from "../data";

function Prodactright() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          flexDirection: { xs: "column", md: "row" },
          textAlign: { xs: "center", md: "left" },
          paddingBlock:{xs:'1rem',md:'4rem'},
          overflow:'hidden',

          width:'100%',
          overflowX:'hidden'
          
        }}
      >
        <Box
          spacing={5}
          sx={{
            display: "flex",
            flex: 1,
            lineHeight: "10px",
            flexDirection: "column",
            textAlign: { xs: "center", md: "left" },
            order:{xs:'1',md:'0'}
          }}
          mt={4}
        >
          <Box>
            <Typography variant="h1">
              Lorem ipsum dolor sit amet.
            </Typography>
            <br />
          </Box>
          <Typography variant="body1">
            {demoData.heroSection.subtitle}
          </Typography>
          <Box display="flex" sx={{justifyContent:{xs:"center",md:'left'}}} mt={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.background.dark,
                color: theme.palette.text.white,
                clipPath: "polygon(0 0, 100% 0%, 90% 100%, 0% 100%);",
              }}
              style={{ margin: "0 10px" }}
            >
              Explore More
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flex: 1, justifyContent: "end" }}>
          <Box
            display="flex"
            justifyContent="center"
            sx={{
              width: "400px",
              height: "500px",
              clipPath: "polygon(50% 0%, 90% 24%, 90% 100%, 10% 100%, 10% 26%)",
              backgroundColor: theme.palette.background.paper,
              borderRadius: "1rem",
            }}
            mt={4}
          >
            <img src="prodact.png" />
          </Box>
        </Box>
        <Box sx={{ position: "absolute", top: "0", left: "0" }}>
          <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clipPath="url(#clip0_116_153)">
              {" "}
              <path
                d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
                fill="url(#paint0_linear_116_153)"
              />{" "}
            </g>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_116_153"
                x1="100"
                y1="0"
                x2="100"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop stopColor="#FF7F11" />{" "}
                <stop offset="1" stopColor="#ffffff" />{" "}
              </linearGradient>{" "}
              <clipPath id="clip0_116_153">
                {" "}
                <rect width="200" height="200" fill="white" />{" "}
              </clipPath>{" "}
            </defs>{" "}
          </svg>{" "}
        </Box>
      </Box>
    </Container>
  );
}

export default Prodactright;
