import Header from "@/components/Header";
const ErrorPage = () => {
  return (
    <div className="w-screen min-h-screen w- bg-gradient-to-r from-[#191b40] via-[#0e273d] to-[#12192b] font-kamerik flex flex-col ">
          <Header />
          <div className="flex flex-col items-center justify-center mt-12 ml-5 md:mx-20 lg:mx-36">
            <h1 className="text-4xl text-white font-kamerik">
             404 not found 
            </h1>
          </div>
        
        </div>
  )
}

export default ErrorPage
