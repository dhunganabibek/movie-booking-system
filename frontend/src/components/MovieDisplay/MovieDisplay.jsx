import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function MovieDisplay() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get("http://localhost:8080/movies");
      const data = await resp.data;
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        margin: "5%",
        gap: 5,

        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movie) => {
        return (
          <div key={movie.id}>
            <MovieCard
              title={movie.title}
              image={movie.image}
              description={movie.description}
            />
          </div>
        );
      })}
    </Box>
  );
}
