import mongoose from "mongoose";

const recentlyWatchedSchema = new mongoose.Schema(
  {
    adult: Boolean,
    backdrop_path: String,
    genre_ids: [Number],
    id: {
      type: Number,
    },
    original_language: String,
    original_title: String,
    overview: String,
    popularity: Number,
    poster_path: String,
    release_date: String,
    title: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number,
  },
  {
    timestamps: true,
  }
);

const recentlyWatchedModel = mongoose.model(
  "recentlyWatched",
  recentlyWatchedSchema
);
export default recentlyWatchedModel;
