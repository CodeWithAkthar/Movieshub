import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Loading from './pages/Skeleton/SkeletonHome'
import DetailPage from './pages/DetailPage'
function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Loading" element={<Loading/>} />
    <Route path="/detailpage" element={<DetailPage/>} />
   </Routes>
   </BrowserRouter>


  );
}

export default App;
