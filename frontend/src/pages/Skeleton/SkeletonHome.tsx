import Header from "@/components/Header";
import { SkeletonCard } from "./SkeletonCard";

const SkeletonHome = () => {
  return (
    <div>
      <div className="w-screen min-h-screen w- bg-gradient-to-r from-[#191b40] via-[#0e273d] to-[rgb(18,25,43)] font-kamerik flex flex-col">
        <Header />
        <div className="mt-12 ml-5 md:ml-16 lg:mx-36">
          <h1 className="text-5xl text-white">MoviesHub</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 lg:gap-10 md:mx-16 md:p-0 md:mt-10 md:grid-cols-3 lg:grid-cols-4 lg:mx-36">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    </div>
  );
};

export default SkeletonHome;
