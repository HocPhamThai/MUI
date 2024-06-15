import React from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import AccessTime from '@mui/icons-material/AccessTime'
import { createTheme } from '@mui/material'
import { ThemeProvider } from '@mui/material'

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'body2',
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: 'body3',
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
})

function TourCard({ tour }) {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} square>
          <img src={tour.image} alt="" className="image" />
          <Box paddingX={2}>
            <Typography variant="subtitle2" component="h2">
              {tour.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body3" ml={0.5}>
                {tour.duration} hours
              </Typography>
            </Box>
            {/* rating */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
              mt={2}
            >
              <Rating
                name="read-only"
                size="small"
                value={tour.rating}
                precision={(5 - Number(tour.rating)).toString()}
                readOnly
              />
              <Typography variant="body2" marginLeft={0.5}>
                {tour.rating}
              </Typography>
              <Typography variant="body2" marginLeft={1}>
                ({tour.numberOfReviews}) reviews
              </Typography>
            </Box>
            {/* price */}
            <Box>
              <Typography variant="h6" component="span">
                FROM C ${tour.price}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  )
}

export default TourCard
