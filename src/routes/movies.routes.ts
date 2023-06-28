import { Router } from "express";


const moviesRouter = Router();

moviesRouter.get("/getMovies");
moviesRouter.put("/watched");

export default moviesRouter;