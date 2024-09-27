import React from "react";
import Rating from "../assets/rating.png";
import { Link } from "react-router-dom";
interface MovieCardProps {
  movie: {
    title: string;
    vote_average: number;
    poster_path: string;
    id: number;
    original_name: string;
  };
}

const POSTER_PATH_URL = import.meta.env.VITE_POSTER_PATH;

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { title, vote_average, poster_path, id, original_name } = props.movie;

  return (
    <>
      <Link to={`/detailpage?id=${id}${title ? `&type=movie` : ""}`}>
        <div className="w-full h-[40vh] mt-2 rounded-lg bg-gradient-to-t from-sky-1000 to-sky-900 lg:h-[60vh]">
          <div className="h-[70%] md:h-[80%] mx-2 mt-2 relative lg:h-[85%] group font-kamerik">
            <img
              src={`${POSTER_PATH_URL}/w500${poster_path}`}
              alt={title || original_name}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform rounded-lg motion-safe:hover:scale-110 group-hover:opacity-80"
            />
            <div className="absolute flex bg-black rounded-md top-2 left-2 text-amber-400 bg-opacity-30 max-w-fit">
              <img className="w-6 h-6 ml-1" src={Rating} alt="Rating Icon" />
              <p className="mr-1">{vote_average}</p>
            </div>
          </div>
          <p className="mx-3 mt-2 text-white">{title || original_name}</p>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
