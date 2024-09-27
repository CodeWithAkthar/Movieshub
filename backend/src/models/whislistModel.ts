import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema(
  {
    adult: Boolean,
    backdrop_path: String,
    genre_ids: [Number],
    id: Number,
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



const wishlistModel = mongoose.model('wishlist',wishlistSchema)
export default wishlistModel