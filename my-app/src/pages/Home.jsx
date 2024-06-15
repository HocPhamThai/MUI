import '../App.css'
import TourCard from '../components/TourCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import cites from '../data.json'
import { Typography } from '@mui/material'

function Home() {
  return (
    <div className="App">
      <Container
        sx={{
          marginTop: 5,
        }}
      >
        {cites.map((city) => (
          <>
            <Typography
              variant="h4"
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} tours
            </Typography>
            <Grid container spacing={2}>
              {city?.tours.map((tour) => (
                <TourCard tour={tour} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  )
}

export default Home
