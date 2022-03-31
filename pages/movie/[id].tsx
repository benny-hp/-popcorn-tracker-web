import type { NextPage } from "next";
import Nav from "../../src/components/Nav";
import useMovies from "../../src/hooks/useMovies";
import { Wrapper } from "../../src/components/ui";
import { useRouter } from "next/router";
import MovieDetails from "../../src/components/MovieDetails";
import { UpdateMovie } from "../../src/interfaces";

const MovieDetailsPage: NextPage = () => {
  const {
    query: { id },
  } = useRouter();
  const { getMovieById, updateMovieById, deleteMovieById } = useMovies();
  const { data } = getMovieById(id as string);
  const { mutate: updateMovie } = updateMovieById(id as string);
  const { mutate: deleteMovie } = deleteMovieById(id as string);

  const handleUpdate = (watched: UpdateMovie) => {
    updateMovie(watched);
  };

  const handleDelete = () => {
    deleteMovie();
  };

  return (
    <>
      <Nav returnButton />
      <Wrapper>
        {data && (
          <MovieDetails
            data={data}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        )}
      </Wrapper>
    </>
  );
};

export default MovieDetailsPage;
