import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="navbarcolor">
        <Toolbar>
          <IconButton
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="#FFF"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            GopiKrishna
          </Typography>
          <Button color="white">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
