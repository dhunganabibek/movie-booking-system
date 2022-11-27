import { Button, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useRef, useState } from "react";

function BuyTicket() {
  const [userInfo, setUserInfo] = useState({});

  const buyTicket = function () {
    console.log(userInfo);
  };
  return (
    <Box>
      <Stack flexDirection="column" py="50px" px="30%" gap={5}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(event) => {
            setUserInfo({ ...userInfo, name: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={(event) => {
            setUserInfo({ ...userInfo, email: event.target.value });
          }}
        />
        <TextField
          id="outlined-basic"
          label="No. of Tickets"
          variant="outlined"
          onChange={(event) => {
            setUserInfo({ ...userInfo, noofticket: event.target.value });
          }}
        />

        <TextField
          id="outlined-basic"
          label="Location"
          variant="outlined"
          onChange={(event) => {
            setUserInfo({ ...userInfo, location: event.target.value });
          }}
        />
        <Button variant="contained" onClick={buyTicket}>
          Submit
        </Button>
      </Stack>
    </Box>
  );
}

export default BuyTicket;
