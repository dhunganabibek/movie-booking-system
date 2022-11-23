import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function MovieCard({ title, image, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader action={title} />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={`${title}-movie`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
