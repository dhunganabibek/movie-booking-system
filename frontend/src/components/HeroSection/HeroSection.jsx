import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRef } from "react";
import heroimage from "../../assets/popcorn.avif";
import { FaPlay } from "react-icons/fa";
import MovieDisplay from "../MovieDisplay/MovieDisplay";

function HeroSection() {
  const moviesRef = useRef(null);
  function handleClick() {
    moviesRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${heroimage})`,
          backgroundPosition: "center",
          backgroundSize: "100vw",
          backgroundRepeat: "no-repeat",
          height: "92vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h1" color="#fff" gutterBottom>
            Unlimited movies
          </Typography>
          <Typography variant="h3" color="#ffffe0">
            TV programmes and
          </Typography>
          <Typography variant="h3" color="#ffffe0">
            everything you desire
          </Typography>
          <Button
            size="xlarge"
            variant="contained"
            color="navbarcolor"
            sx={{
              mt: 5,
              height: "70px",
              width: "200px",
              borderRadius: "20px",
            }}
            onClick={handleClick}
          >
            <Stack flexDirection="row" gap={2}>
              <FaPlay color="#ffffe0" size="35px" />
              <Typography variant="h5" color="#fff">
                Explore
              </Typography>
            </Stack>
          </Button>
        </Box>
      </Box>
      <div ref={moviesRef}>
        <MovieDisplay />
      </div>
    </>
  );
}

export default HeroSection;
