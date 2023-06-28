import { Router } from "express";
import { getMovies } from "../controllers/movie.controllers";


const moviesRouter = Router();

moviesRouter.get("/getMovies",getMovies);
moviesRouter.put("/watched");

export default moviesRouter;