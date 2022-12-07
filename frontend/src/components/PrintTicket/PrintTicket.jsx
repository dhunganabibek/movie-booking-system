import { Box, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import QRCode from "../../assets/qrcode.jpg"


function PrintTicket() {
  return (
    <Box
    sx={{
      backgroundColor:"#F2F2F2",
      height:"100vh",
      margin: "auto",
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
    >
      <Typography variant="h2">
        Ticket Information
      </Typography>
      <Box sx={{
        display:"flex",
        
      }}>
        <Card sx={{ minWidth: 375, borderRadius: "50px", p: 5, m:5 }}>
          <CardContent>
            <Typography  variant="h4" gutterBottom>
              Gopi Krishna Movie
            </Typography>
            <img src={QRCode}/>
            <Typography variant="h5" component="div"  gutterBottoms>
              Location: Lubbock
            </Typography>
            <Typography variant="h6"  gutterBottom>
              Contact us: 8323106869
            </Typography>
            <Typography variant="h6"  gutterBottom>
              Thank you for choosing us
            </Typography>
          </CardContent>
        </Card>
      </Box>

      

    </Box>
  )
}

export default PrintTicket