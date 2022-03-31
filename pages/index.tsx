import type { NextPage } from "next";
import Nav from "../src/components/Nav";
import useMovies from "../src/hooks/useMovies";
import { Box, Grid, Typography } from "@mui/material";
import { Wrapper } from "../src/components/ui";
import MovieCard from "../src/components/MovieCard";
import WatchedButton from "../src/components/MovieDetails/WatchedButtom";
import { useContext, useState } from "react";
import WatchlistButton from "../src/components/MovieDetails/WatchlistButton";
import { SetToggleContext, ToggleContext } from "../src/context/toggle.context";

const Home: NextPage = () => {
  const toggle = useContext(ToggleContext);
  const setToggle = useContext(SetToggleContext);
  const { getMoviesApi } = useMovies();
  const { data, isError, error } = getMoviesApi(toggle);

  return (
    <>
      <Nav />
      <Wrapper>
        {isError && (
          <Typography mb={2} textAlign="center" sx={{ color: "red" }}>
            {error.message}
          </Typography>
        )}

        <WatchlistButton
          watched={toggle}
          home
          onClick={() => setToggle(false)}
        />

        <WatchedButton watched={toggle} home onClick={() => setToggle(true)} />
        <Grid container columnSpacing={2} rowGap={2} mt={1}>
          {data?.map((movie) => (
            <MovieCard data={movie} key={movie.id} />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default Home;
