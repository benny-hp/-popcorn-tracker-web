import { useQuery } from "react-query";
import { Movie } from "../interfaces";
import { getMovies } from "../utils/api";

const useMovies = () => {
  const getMoviesApi = () => {
    return useQuery<Movie[], Error>("movies", getMovies);
  };
  return {
    getMoviesApi,
  };
};

export default useMovies;
