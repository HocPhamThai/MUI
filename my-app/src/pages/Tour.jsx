import {
  Box,
  Container,
  Typography,
  Paper,
  BottomNavigation,
} from '@mui/material'
import React from 'react'
import ImageCollage from '../components/ImageCollage'
import Accordion from '../components/Accordion'
import BasicModal from './../components/Modal'

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" mt={3}>
        Explor the World in Vegas
      </Typography>
      <Box
        mt={3}
        sx={{
          display: 'flex',
        }}
      >
        <img
          src="https://media.timeout.com/images/105124791/750/422/image.jpg"
          alt=""
          height={325}
        />
        <ImageCollage />
      </Box>
      <Box mt={3}>
        <Typography variant="h6" component="h4">
          About this ticket
        </Typography>
        <Typography mt={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit porro
          commodi ipsum neque accusamus? Eos quibusdam dignissimos rem quas
          accusamus repellat iste doloremque voluptatum omnis mollitia maiores
          eius saepe dolore doloribus animi, iure sed! Quam, libero
          reprehenderit dolore odio earum sint eos pariatur nihil corporis
          accusamus eum rerum distinctio ex!
        </Typography>
      </Box>
      <Box mt={3} mb={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently Asked Questions
        </Typography>
        <Accordion />
      </Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  )
}

export default Tour
