import express from 'express'
import {wishlistPost,fetchWishlist,deleteMovie} from '../controllers/wishListController'

const router = express.Router();


router.post('/addmovie',wishlistPost);
router.get('/list',fetchWishlist);
router.post('/deletemovie',deleteMovie);
export default router

