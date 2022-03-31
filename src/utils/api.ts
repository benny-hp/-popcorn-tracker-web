import axios from "axios";
import {
  Movie,
  MovieResult,
  MovieSearch,
  MoviesSearch,
  UpdateMovie,
} from "../interfaces";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export function getMovies(watched: boolean): Promise<Movie[]> {
  return api
    .get<Movie[]>("/movies", {
      params: {
        watched,
      },
    })
    .then((res) => res.data)
    .catch(() => {
      throw new Error("There was an error getting the movies");
    });
}
export function getMovie(id: string): Promise<Movie> {
  return api.get<Movie>(`/movies/${id}`).then((res) => res.data);
}
export function updateMovie(id: string, data: UpdateMovie): Promise<Movie> {
  return api
    .patch<Movie>(`/movies/${id}/watched`, data)
    .then((res) => res.data);
}

export function createMovie(data: Movie): Promise<Movie> {
  return api
    .post<Movie>("/movies", data)
    .then((res) => res.data)
    .catch(() => {
      throw new Error("there was and error the movie could not be safe!!");
    });
}

export function searchMovies(query: string): Promise<MoviesSearch> {
  return api
    .get<MoviesSearch>("/movies/search", {
      params: {
        query,
      },
    })
    .then((res) => res.data);
}

export function getSearchMovie(id: string): Promise<MovieSearch> {
  return api
    .get<MovieSearch>(`/movies/search/${id}`)
    .then((res) => res.data)
    .catch(() => {
      throw new Error("there was a fatal error");
    });
}
