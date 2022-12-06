import { Button, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useRef, useState } from "react";

function BuyTicket() {
  const [userInfo, setUserInfo] = useState({});

  const buyTicket = function () {
    console.log(userInfo);
  };
  
  return (
    <Box sx={{
      backgroundColor:"white"
    }}>
      <Stack flexDirection="column" py="20px" px="30%" gap={5}>

      <Typography variant="h2">
        User Information
      </Typography>

      <Stack>
        <Typography variant="h6">
          Name
        </Typography>
        <TextField
            id="outlined-basic"
            variant="outlined"
            onChange={(event) => {
              setUserInfo({ ...userInfo, name: event.target.value });
            }}
          />
      </Stack>

      <Stack>
        <Typography variant="h6">
          Email
        </Typography>
        <TextField
          id="outlined-basic"
          
          variant="outlined"
          onChange={(event) => {
            setUserInfo({ ...userInfo, email: event.target.value });
          }}
        />
      </Stack>

      <Stack>
        <Typography variant="h6">
          Number of Tickets
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={(event) => {
            setUserInfo({ ...userInfo, noofticket: event.target.value });
          }}
        />
      </Stack>

      <Stack>
        <Typography variant="h6">
          Location
        </Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={(event) => {
            setUserInfo({ ...userInfo, location: event.target.value });
          }}
        />
      </Stack>
        <Button variant="contained" onClick={buyTicket} size="large" href="/printticket">
          Submit
        </Button>
        
      </Stack>
    </Box>
  );
}

export default BuyTicket;
