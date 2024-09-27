import Header from "@/components/Header";
import { Skeleton } from "@/components/ui/skeleton";

const DetailPageSkeleton = () => {
  return (
    <div>
      <div className="w-screen min-h-screen w- bg-gradient-to-r from-[#191b40] via-[#0e273d] to-[rgb(18,25,43)] font-kamerik flex flex-col">
        <Header />
      

        <div className="flex flex-col mx-5 mt-10 space-y-3 md:mx-16 lg:mx-36">
          <Skeleton className="h-[350px] w-[] rounded-xl bg-[#153f64] " />
          <div className="space-y-2">
            <Skeleton className="h-[35px] w-[250px] bg-[#153f64] mr-44" />
          </div>
        </div>

        <div className="flex flex-row gap-4 mx-5 md:mx-16 lg:mx-36">
          <Skeleton className="h-[400px] w-[50%] bg-[#153f64] mt-10 rounded-2xl" /> 
          <Skeleton className="h-[200px] w-[50%] bg-[#153f64] mt-10 rounded-2xl" />       
        </div>
      </div>
    </div>
  );
};

export default DetailPageSkeleton;
