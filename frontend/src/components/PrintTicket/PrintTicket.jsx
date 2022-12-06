import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';


function PrintTicket() {
  return (
    <Box
    sx={{
      backgroundColor:"#F2F2F2",
      height:"100vh",
      px: "30%",
      py: "10%"
    }}
    >
      <Typography variant="h2">
        Ticket Information
      </Typography>

      <Card sx={{ minWidth: 375 }}>
      <CardContent>
        <Typography  variant="h4" gutterBottom>
          Gopi Krishna Movie
        </Typography>
        <Typography variant="h5" component="div">
          Location
        </Typography>
        <Typography variant="h6" >
          watch HD movie in a cheap price
        </Typography>
        <Typography variant="h6">
        </Typography>
      </CardContent>
    </Card>

    </Box>
  )
}

export default PrintTicket