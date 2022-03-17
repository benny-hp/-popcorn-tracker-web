import axios from "axios";
import { Movie, MoviesSearch, UpdateMovie } from "../interfaces";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export function getMovies(): Promise<Movie[]> {
  return api.get<Movie[]>("/movies").then((res) => res.data);
}
export function getMovie(id: string): Promise<Movie> {
  return api.get<Movie>(`/movies/${id}`).then((res) => res.data);
}
export function updateMovie(id: string, data: UpdateMovie): Promise<Movie> {
  return api
    .patch<Movie>(`/movies/${id}/watched`, data)
    .then((res) => res.data);
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
