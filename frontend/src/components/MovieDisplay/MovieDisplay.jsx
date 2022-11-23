import React from "react";
import { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";

export default function MovieDisplay() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get("http://localhost:8080/getmovies");
      const data = await resp.data;
      setMovies(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {console.log(movies)}
      <MovieCard
        title="12 angry men"
        image=""
        description="12 Angry Men explores many techniques of consensus-building and the difficulties encountered in the process among this group of men whose range of personalities adds to the intensity and conflict. The jury members are identified only by number; no names are revealed until an exchange of dialogue at the very end. The film forces the audience to evaluate their own self-image through observing the personalities, experiences, and actions of the jurors. The film is also notable for its almost exclusive use of one set, where all but three minutes of the film takes place."
      />
    </div>
  );
}
