import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function MovieCard({ title, image, description }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#f2f2f2",
        p: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <CardMedia
        component="img"
        height="500px"
        width="100%"
        image={image}
        alt={`${title}-movie`}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button variant="contained" href="/buyticket">
          Buy Ticket
        </Button>
      </CardContent>
    </Card>
  );
}
