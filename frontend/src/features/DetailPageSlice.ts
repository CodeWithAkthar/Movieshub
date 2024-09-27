import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../utility/typos";

type InitialState = {
  loading: boolean;
  movie: Movie | null;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  movie: null,
  error: "",
};

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchMovie = createAsyncThunk("movie/fetchMovie", async (id: string | null ) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    throw error;
  }
});

const MovieDetailSlice = createSlice({
    name: "Moviedetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchMovie.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(fetchMovie.fulfilled, (state, action:PayloadAction<Movie>) => {
        (state.loading = false), (state.movie = action.payload);
        state.error = "";
      });
  
      builder.addCase(fetchMovie.rejected, (state,action) => {
        (state.loading = false), (state.movie = null);
        state.error = action.error.message || "Error fetching movie details"
      });
    },
  });

  
export default MovieDetailSlice.reducer;