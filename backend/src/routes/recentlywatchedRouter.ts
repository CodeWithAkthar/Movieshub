import express from 'express'
import {recentlyWatchedPost,fetchRecentlyWatched,deleteMovie} from '../controllers/recentlyWatchedController'

const router = express.Router();


router.post('/addmovie',recentlyWatchedPost);
router.get('/list',fetchRecentlyWatched);
router.post('/deletemovie',deleteMovie);

export default router

