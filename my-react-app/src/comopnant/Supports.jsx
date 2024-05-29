
import { Box, useTheme } from "@mui/material";

function VendorLogos() {
    const theme = useTheme();
  
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                paddingInline: { xs: '1rem', md: '4rem' }, 
                justifyContent: { xs: 'center', sm: 'space-between' }, 
                alignItems: 'center', 
                backgroundColor: theme.palette.background.paper,
                gap: { xs: '1rem', sm: '0' }
            }}
        >
            <img src='vendor-1.png' style={{ filter: "grayscale(100%)", width: '7rem', height: '7rem' }} />
            <img src='vendor-2.png' style={{ filter: "grayscale(100%)", width: '7rem', height: '7rem' }} />
            <img src='vendor-3.png' style={{ filter: "grayscale(100%)", width: '7rem', height: '7rem' }} />
            <img src='vendor-4.png' style={{ filter: "grayscale(100%)", width: '7rem', height: '7rem' }} />
        </Box>
    );
}

export default VendorLogos;
