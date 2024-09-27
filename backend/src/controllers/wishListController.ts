import express from "express";
import wishlistModel from "../models/whislistModel";
import { movieItem } from "utility/typos";

export const wishlistPost = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    }: movieItem = req.body;

    //checking movie already exist
    const movieExist = await wishlistModel.findOne({ id });
    if (movieExist) {
      console.log("movieExist already Exist");
      return res.status(409).json({ messaage: "movie already exist" });
    }

    //adding movie to db
    const newMovie = new wishlistModel({
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_language,
      original_title,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    });

    await newMovie.save();
    res.status(200).json({
      message: "Candidate created successfully",
      wishlist: newMovie,
    });
  } catch (error) {
    console.error("Error handling form submission:", error);
    res.status(500).send("Internal server error");
  }
};

//fetching list 
export const fetchWishlist = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    //fetching all movies in wishlist 
    const wishlist = await wishlistModel.find();
    return res.status(200).json({ wishlist: wishlist });
  } catch (error) {
    console.error("Error on fetching wishlist details:", error);
    res.status(500).send("Internal server error");
  }
};

//delete movie
export const deleteMovie = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.body;

    //   checking movie already exist
    const movieExist = await wishlistModel.findOne({ id });
    if (!movieExist) {
      console.log("movie is not Exist");
      return res.status(409).json({ messaage: "movie is not Exist" });
    }

    //deleting the movie using movieid
    await wishlistModel.findOneAndDelete({ id });

    return res
      .status(200)
      .json({ message: "movie deleted successfully from wishlist" });
  } catch (error) {}
};
