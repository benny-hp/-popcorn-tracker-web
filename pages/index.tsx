import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import Copyright from "../src/components/Copyright";
import Nav from "../src/components/Nav";
import useMovies from "../src/hooks/useMovies";
import { Grid } from "@mui/material";
import { Wrapper } from "../src/components/ui";
import MovieCard from "../src/components/MovieCard";

const Home: NextPage = () => {
  const { getMoviesApi } = useMovies();
  const { data } = getMoviesApi();

  return (
    <>
      <Nav />
      <Wrapper>
        <Grid container columnSpacing={2} rowGap={2}>
          {data?.map((movie) => (
            <MovieCard data={movie} key={movie.id} />
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default Home;
