import type { NextPage } from "next";
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
