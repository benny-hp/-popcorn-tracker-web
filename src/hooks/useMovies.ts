import { useMutation, useQuery, useQueryClient } from "react-query";
import { Movie, UpdateMovie } from "../interfaces";
import { getMovie, getMovies, updateMovie } from "../utils/api";

const useMovies = () => {
  const getMoviesApi = () => {
    return useQuery<Movie[], Error>("movies", getMovies);
  };

  const getMovieById = (id: string) => {
    return useQuery<Movie, Error>(["movie", id], () => getMovie(id));
  };

  const updateMovieById = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation((data: UpdateMovie) => updateMovie(id, data), {
      onSuccess: (data) => {
        queryClient.invalidateQueries("movies");
        queryClient.setQueryData(["movie", id], data);
      },
    });
  };
  return {
    getMoviesApi,
    getMovieById,
    updateMovieById,
  };
};

export default useMovies;
