export interface Movie {
  backdrop_path: string;
  genres: string;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: string;
  vote_average: number;
  vote_count: number;
  watched: boolean;
}
export interface UpdateMovie {
  watched: boolean;
}

export interface MovieResult {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export interface MoviesSearch {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}
