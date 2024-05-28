import { Box,  Container, Grid, Typography } from "@mui/material";
import demoData from "../data";


function Reviews() {
  return (
    <Container>
      <Box sx={{textAlign:'center'}}>
         <Typography variant="h1">Testimonials</Typography>
      </Box>
      <Grid sx={{justifyContent:'center'}}  container spacing={4} mt={2}>
            {demoData.testimonials.map((testimonial, index) => (
              <Grid  item xs={12} md={4} key={index}>
                
                  <Box>
                    <Box  display="flex" justifyContent="center" sx={{height:'17rem',width:'17rem',margin:'0 auto' ,backgroundColor:`${testimonial.color}`,clipPath: "polygon(50% 0%, 90% 24%, 90% 100%, 10% 100%, 10% 26%)",}}mb={2}>
                      <img src={testimonial.avatarSrc} alt={testimonial.name} />
                    </Box>
                    <Typography variant="body1" align="center">{testimonial.feedback}</Typography>
                    <Typography variant="body2" align="center" color="textSecondary">{testimonial.name}</Typography>
             
                </Box>
              </Grid>
               ))}
        </Grid>
    </Container>
  )
}

export default Reviews