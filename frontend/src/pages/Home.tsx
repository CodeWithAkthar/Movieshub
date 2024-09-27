import { useEffect, useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { PaginationDemo } from "@/components/Pagination";
import Footer from "@/components/Footer";
import ToggleButtons from "@/components/FilterBar";
import Loading from "./Skeleton/SkeletonHome";
import { DropdownMenuDemo } from "../components/Sort";
import { useAppSelector,useAppDispatch } from "@/app/hooks";
import { fetchMoviesList } from "@/features/MovieListSlice";

const Home = () => {
  const { movie, loading, error } = useAppSelector((state) => state.movielist);

  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(fetchMoviesList())
  },[])


     
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 8;
  const totalPages = Math.ceil(movie?.length / moviesPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const displayedMovies = movie?.slice(
    (currentPage - 1) * moviesPerPage,
    currentPage * moviesPerPage
  );

  return (
    <div className=" mx-auto font-kamerik w-screen min-h-screen bg-gradient-to-r from-[#191b40] via-[#0e273d] to-[#12192b]">
      <Header/>
      <div className="mt-12 ml-5 md:ml-16 lg:mx-36">
        <h1 className="text-5xl text-white">MoviesHub</h1>
        <SearchBar />
        <div className="mt-10">
          <ToggleButtons />
        </div>
      </div>

      <div className="flex justify-between mt-16 ml-6 md:mx-16 lg:mx-36">
        <span className="flex items-end text-slate-500">
          <h2 className="text-3xl">All</h2>
          <h3 className="ml-1 text-1xl">({movie?.length})</h3>
        </span>
        <div className="mr-6">
          <DropdownMenuDemo />
        </div>
      </div>

      {loading && <Loading />}
      {!loading && error && <div>{error}</div>}

      <div className="grid grid-cols-2 gap-4 p-4 lg:gap-10 md:mx-16 md:p-0 md:mt-10 md:grid-cols-3 lg:grid-cols-4 lg:mx-36 lg:p-0">
        {displayedMovies?.map((i) => (
          <MovieCard key={i.id} movie={i} />
        ))}
      </div>

      <PaginationDemo
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
