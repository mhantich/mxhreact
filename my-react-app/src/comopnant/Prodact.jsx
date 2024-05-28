import { useTheme } from "@emotion/react";

import { Box, Container, Typography, Button } from "@mui/material";
import demoData from "../data";

function Prodact() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1 }}>
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
            <img src="rem.png" />
          </Box>
        </Box>
        <Box
          spacing={5}
          sx={{
            display: "flex",
            flex: 1,
            lineHeight: "10px",
            flexDirection: "column",
          }}
          mt={4}
        >
          <Box>
            <Typography variant="h1" align="left">
              Lorem ipsum dolor sit amet.
            </Typography>
            <br />
          </Box>
          <Typography variant="body1" align="left">
            {demoData.heroSection.subtitle}
          </Typography>
          <Box display="flex" justifyContent="start" mt={2}>
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

        <Box sx={{ position: "absolute", top: "0", right: "0" }}>
          <svg
            width="200"
            height="200"
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

export default Prodact;
