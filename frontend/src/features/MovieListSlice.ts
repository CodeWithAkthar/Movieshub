import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "@/utility/typos";
type Movies = Movie[];
type initialState = {
  loading: boolean;
  movie: Movies;
  error: string;
};

const initialState: initialState = {
  loading: false,
  movie: [],
  error: "",
};

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_BASE_URL;



export const fetchMoviesList = createAsyncThunk<Movies>(
  "movies/fetchmovies",
  async () => {
    
    try {
      const movieResponse = await axios.get(
        `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      const tvResponse = await axios.get(
        `${API_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      return (
        [...movieResponse.data.results, ...tvResponse.data.results] || []
      );
    } catch (error) {
      console.error("Error fetching all lists:", error);
      throw error;
    }
  }
);

const MovieListSlice = createSlice({
  name: "movielist",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
        fetchMoviesList.pending,(state)=>{
            state.loading=true
        }
    );

    builder.addCase(
      fetchMoviesList.fulfilled,
      (state, action: PayloadAction<Movies>) => {
        state.loading = false;
        state.movie = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchMoviesList.rejected,(state,action)=>{
        state.loading=false;
        state.movie=[];
        state.error=action.error.message || "Error fetching movie lists"
    })
  },
});


export default MovieListSlice.reducer