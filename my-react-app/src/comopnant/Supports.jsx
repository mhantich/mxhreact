import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'


function Supports() {
    const theme = useTheme()
  return (
    <Box sx={{display:'flex',paddingInline:'4rem',justifyContent:'space-between',alignItems:'center',backgroundColor:theme.palette.background.paper}}>
    <img src ='vendor-1.png' style={{filter: "grayscale(100%)", width:'7rem',height:'7rem'}} />
    <img style={{filter: "grayscale(100%)", width:'7rem',height:'7rem'}} src ='vendor-2.png'/>
    <img style={{filter: "grayscale(100%)", width:'7rem',height:'7rem'}} src ='vendor-3.png'/>
    <img  style={{filter: "grayscale(100%)", width:'7rem',height:'7rem'}}src ='vendor-4.png'/>
    </Box>
    
  )
}

export default Supports