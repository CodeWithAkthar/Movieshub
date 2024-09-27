import express from "express";
import recentlyWatchedModel from "../models/recentlyWathedModel";
import { movieItem } from "utility/typos";

//adding movie to recentlywatched
export const recentlyWatchedPost = async (
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

    //   checking movie already exist
    const movieExist = await recentlyWatchedModel.findOne({ id });
    if (movieExist) {
      await recentlyWatchedModel.findOneAndUpdate({id});
      console.log("movieExist already Exist");
      return res.status(200).json({ messaage: "movie updated" ,details:movieExist});
    }
    // adding to db
    const newMovie = new recentlyWatchedModel({
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

    const data = await newMovie.save();
    console.log(data);
    res.status(200).json({
      message: "movie added successfully",
      recentlyWatched: newMovie,
    });
  } catch (error) {
    console.error("Error handling form submission:", error);
    res.status(500).send("Internal server error");
  }
};

// fecthing list
export const fetchRecentlyWatched = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    //listing the movies on the basis uopdated date .
    const recentlyWatched = await recentlyWatchedModel.find().sort({updatedAt:-1});    
    return res.status(200).json({ recentlyWatched: recentlyWatched });
  } catch (error) {
    console.error("Error on fetching recentlywatched details:", error);
    res.status(500).send("Internal server error");
  }
};

// delete movie
export const deleteMovie = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.body;

    //   checking movie already exist
    const movieExist = await recentlyWatchedModel.findOne({ id });
    if (!movieExist) {
      console.log("movie is not Exist");
      return res.status(409).json({ messaage: "movie is not Exist" });
    }

    //deleting the movie using movieid
    await recentlyWatchedModel.findOneAndDelete({ id });

    return res
      .status(200)
      .json({ message: "movie deleted successfully from recentlywatched" });
  } catch (error) {}
};
