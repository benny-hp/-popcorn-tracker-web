import { useMutation, useQuery, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import {
  Movie,
  MovieResult,
  MovieSearch,
  MoviesSearch,
  UpdateMovie,
} from "../interfaces";
import {
  createMovie,
  getMovie,
  getMovies,
  getSearchMovie,
  searchMovies,
  updateMovie,
} from "../utils/api";

const useMovies = () => {
  const getMoviesApi = (watched: boolean) => {
    return useQuery<Movie[], Error>(
      ["movies", watched],
      () => getMovies(watched),
      {
        enabled: true,
      }
    );
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
  const searchMoviesApi = (query: string) => {
    return useQuery<MoviesSearch, Error>(
      ["search", query],
      () => searchMovies(query),
      {
        enabled: !!query,
      }
    );
  };

  const getSearchMovieById = (id: string) => {
    return useQuery<MovieSearch, Error>(["moviesSearch", id], () =>
      getSearchMovie(id)
    );
  };

  const createMovieApi = (data: Movie) => {
    const queryClient = useQueryClient();
    const { push } = useRouter();
    return useMutation<Movie, Error, Movie>(
      (data: Movie) => createMovie(data),
      {
        onSuccess: (data) => {
          queryClient.invalidateQueries("movies");
          push("/");
        },
      }
    );
  };

  return {
    getMoviesApi,
    getMovieById,
    updateMovieById,
    searchMoviesApi,
    getSearchMovieById,
    createMovieApi,
  };
};

export default useMovies;
