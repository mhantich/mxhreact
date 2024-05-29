import { useTheme } from "@emotion/react";
import { Box, Button, Container, Input, Typography } from "@mui/material";

function News() {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBlock:{xs:'1rem',md:'4rem'},
        }}
      >
        <Box sx={{ flex: 1,display:{xs:'none',md:'block'} }}>
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
            <img src="subs.png" />
          </Box>
        </Box>
        <Box
          spacing={5}
          sx={{
            display: "flex",
            flex: 1,
            lineHeight: "10px",
            flexDirection: "column",
            textAlign: { xs: "center", md: "left" },
          }}
          mt={4}
        >
          <Box>
            <Typography variant="h1" >
              Lorem ipsum dolor sit amet.
            </Typography>
            <Typography variant="body2"  color={theme.palette.text.secondary}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, blanditiis?
              Lorem ipsum dolor, sit amet consectetur
              Lorem ipsum dolor, sit ame
            </Typography>
            <br />
          </Box>
          <Input placeholder="Email Here" />
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
              Join Us
            </Button>
          </Box>
        </Box>

        <Box sx={{ position: "absolute", top: "0", right: "0" }}>
          <svg
            width="100"
            height="100"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <g clipPath="url(#clip0_118_195)">
              {" "}
              <path
                d="M100 0L101.459 91.7276L134.202 6.03074L104.2 92.7254L164.279 23.3956L106.435 94.6006L186.603 50L107.893 97.127L198.481 82.6352L108.4 100L198.481 117.365L107.893 102.873L186.603 150L106.435 105.399L164.279 176.604L104.2 107.275L134.202 193.969L101.459 108.272L100 200L98.5414 108.272L65.798 193.969L95.8 107.275L35.7212 176.604L93.5652 105.399L13.3975 150L92.1066 102.873L1.51923 117.365L91.6 100L1.51923 82.6352L92.1066 97.127L13.3975 50L93.5652 94.6006L35.7212 23.3956L95.8 92.7254L65.798 6.03074L98.5414 91.7276L100 0Z"
                fill="url(#paint0_linear_118_195)"
              />{" "}
            </g>{" "}
            <defs>
              {" "}
              <linearGradient
                id="paint0_linear_118_195"
                x1="157.5"
                y1="32"
                x2="44"
                y2="147.5"
                gradientUnits="userSpaceOnUse"
              >
                {" "}
                <stop offset="0.0509862" stopColor="#FF7F11" />{" "}
                <stop offset="1" stopColor="#ffffff" />{" "}
              </linearGradient>{" "}
              <clipPath id="clip0_118_195">
                {" "}
                <rect width="200" height="200" fill="white" />{" "}
              </clipPath>{" "}
            </defs>{" "}
          </svg>
        </Box>
      </Box>
    </Container>
  );
}

export default News;
