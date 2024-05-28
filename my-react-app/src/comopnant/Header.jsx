import { useTheme } from "@emotion/react";
import { Box, Button, Typography, styled } from "@mui/material";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Header() {
  const theme = useTheme();
  const FlexBetween = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });

  const pages = ["Home", "Products", "About", "Reviews"];

  // const HexagonWrapper = styled('div')({
  //     width: '200px',
  //     height: '230px',
  //     padding:'20px',
  //     display: 'inline-block',
  //     position: 'relative',
  //     backgroundColor:'red',
  //     clipPath: 'polygon(50% 0, 100% 28%, 100% 100%, 0 100%, 0 28%)',

  //   });

  //   const HexagonImage = styled('img')({
  //     width: '100%',
  //     height: '100%',
  //     objectFit: 'cover',

  //   });
  return (
    <div>
      <header
        style={{
          position: "fixed",
          top: "0%",
          right: "0%",
          left: "0",
          bottom: "0%",
          paddingInline: "30px",
          height:"10vh"
        }}
      >
        <FlexBetween>
          <Typography variant="h2" sx={{ fontWeight: "bold" }} component={"h1"}>
            AR-SHAKIR
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                variant=""
                sx={{
                  my: 2,
                  display: "block",
                  color: theme.palette.secondary.main,
                  "&:hover": {
                    color: theme.palette.primary.dark, // Adjust as needed
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <Button startIcon={<PersonSearchIcon />}></Button>
            <Button
              sx={{
                my: 2,
           
                color: theme.palette.secondary.main,
             
              }}
              startIcon={<ShoppingCartIcon />}
            ></Button>
          </Box>
        </FlexBetween>
      </header>
    </div>
  );
}

export default Header;
