import { Router } from "express";
import { createMovie, deleteMovie, getMovies, getQuantity, editMovie } from "../controllers/movie.controllers";
import { validateSchema } from "../middlewares/validateSchema";
import { movieSchema } from "../schemas/movie.schemas";


const moviesRouter = Router();

moviesRouter.get("/getMovies",getMovies);
moviesRouter.get("/getQuantity",getQuantity)
moviesRouter.post("/createMovie",validateSchema(movieSchema), createMovie)
moviesRouter.delete("/delete/:id", deleteMovie);
moviesRouter.put("/watched/:id", editMovie);

export default moviesRouter;