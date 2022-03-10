import axios from "axios";
import { Movie } from "../interfaces";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export function getMovies(): Promise<Movie[]> {
  return api.get<Movie[]>("/movies").then((res) => res.data);
}
