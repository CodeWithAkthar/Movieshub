import { configureStore } from "@reduxjs/toolkit";
import MovieListReducer from "../features/MovieListSlice";
import DetailPageReducer from "../features/DetailPageSlice";

const store = configureStore({
    reducer:{
        movielist:MovieListReducer,
        movie:DetailPageReducer
    }
})

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;