import type { NextPage } from "next";
import Nav from "../../../src/components/Nav";
import useMovies from "../../../src/hooks/useMovies";
import { Wrapper } from "../../../src/components/ui";
import { useRouter } from "next/router";
import MovieDetails from "../../../src/components/MovieDetails";
import { Movie } from "../../../src/interfaces";
import { Typography } from "@mui/material";

const MovieDetailsPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { getSearchMovieById, createMovieApi } = useMovies();
  const { data, error: searchError } = getSearchMovieById(id as string);

  const genres: string = data?.genres.reduce((value, genre) => {
    return (value = `${value} ${genre.name},`);
  }, "") as string;

  let myData: Movie | undefined;
  if (data)
    myData = {
      ...data,
      genres: genres.substring(0, genres.length - 1),
      watched: null,
    };

  const { mutate: createMovie, error: createError } = createMovieApi(
    myData as Movie
  );

  const handleCreate = (data: Movie) => {
    createMovie(data);
  };

  return (
    <>
      <Nav returnButton />
      <Wrapper>
        {createError && (
          <Typography mb={2} textAlign="center" sx={{ color: "red" }}>
            {createError.message}
          </Typography>
        )}
        {searchError && (
          <Typography mb={2} textAlign="center" sx={{ color: "red" }}>
            {searchError.message}
          </Typography>
        )}
        {myData && <MovieDetails data={myData} handleCreate={handleCreate} />}
      </Wrapper>
    </>
  );
};

export default MovieDetailsPage;
