import Header from "@/components/Header";
import { useSearchParams } from "react-router-dom";
import Rating from "../assets/rating.png";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import DetailPageSkeleton from "./Skeleton/DetailPageSkeleton";
import ErrorPage from "./Skeleton/404";
import { useEffect } from "react";
import { fetchMovie } from "@/features/DetailPageSlice";
const DetailPage = () => {
  const { movie, loading, error } = useAppSelector((state) => state.movie);
  console.log("this is movie ", movie);
  const dispatch  = useAppDispatch()
  const [searchParams] = useSearchParams();
  const movieId: string | null = searchParams.get("id");
  useEffect(()=> {
    dispatch(fetchMovie(movieId))
  },[])

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-[#191b40] via-[#0e273d] to-[#12192b] font-boring">
        <Header />
        {loading && <DetailPageSkeleton />}
        {!loading && error ? <ErrorPage /> : null}

        {/* poster&title */}
        <div className="mx-5 mt-10 md:mx-20 md:mt-20 rounded-2xl h-[65vh] md:h-[45vh] relative lg:mx-36 lg:h-[75vh] ">
          <img
            className=" rounded-lg h-[75%] md:rounded-3xl w-full md:h-[80%]"
            src={`https://image.tmdb.org/t/p/w1280${movie?.backdrop_path}`}
            alt="poster"
          />

          <div className="text-white absolute bottom-0 left-0  bg-gray-800 h-[35%] rounded-2xl w-full md:w-[85%] md:bottom-3 shadow-lg lg:h-[25%] lg:bottom-7 lg:left-20 lg:w-[45%] lg:text-center lg:flex lg:justify-center lg:items-center bg-opacity-90 md:text-center md:justify-center md:flex md:items-center">
            <strong>
              <h1 className="m-5 text-3xl lg:text-4xl font-kamerik">
                {movie?.title}
              </h1>
            </strong>
          </div>
        </div>

        <div className="mx-5 mt-10 md:grid-cols-2 md:mx-20 text-slate-500 md:gap-6 md:mt-20 md:grid lg:mx-36 lg:gap-20">
          <div className="mt-10 mb-10 md:mt-0">
            <img
              className="rounded-xl md:h-full"
              src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
              alt="fullposter"
            />
          </div>
          <div>
            {/* title */}
            <strong>
              <h1 className="text-3xl text-white">{movie?.title}</h1>
            </strong>
            <p className="mt-5 text-slate-500">{movie?.overview}</p>
            {/* rating */}
            <div className="flex gap-3 p-2 mt-5 bg-black rounded-md text-amber-400 bg-opacity-30 max-w-fit">
              <img className="w-8 h-8 ml-1" src={Rating} alt="" />
              <p className="mr-1 text-xl">{movie?.vote_average}</p>
            </div>

            <p className="mt-5 text-base">
              Release date <br />
              <strong className="text-1xl text-slate-400">
                {movie?.release_date}
              </strong>{" "}
            </p>

            <p className="mt-5 text-base">
              Run time <br />
              <strong className="text-1xl text-slate-400">
                {movie?.runtime}
              </strong>
            </p>

            <p className="mt-5 text-base">
              Genres
              <br />
              <strong className="text-1xl text-slate-400 ">
                {movie
                  ? movie.genres.map((genre) => (
                      <span key={genre.id} className="mr-2">
                        {genre.name},
                      </span>
                    ))
                  : "No genres available"}
              </strong>
            </p>

            <Button className="mt-5 text-white transform bg-[#191b40] motion-safe:hover:scale-110 ">
              Add to Wishlist
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DetailPage;
