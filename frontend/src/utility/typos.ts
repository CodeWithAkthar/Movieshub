interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  genres: Genre[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  title: string;
  vote_average: number;
  from: string;
  backdrop_path: string;
  original_name:string
}



