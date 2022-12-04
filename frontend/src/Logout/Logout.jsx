import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

function Logout() {
  const logout = async () => {
    await signOut(auth);
  };
  return (
    <Button onClick={logout} color="white">
      Logout
    </Button>
  );
}

export default Logout;
