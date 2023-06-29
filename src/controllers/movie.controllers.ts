import { CreateMovie, Query } from "../protocols/movies.protocols";
import { getMoviesDB, getQuantityDB } from "../repositories/movie.repository"
import {Request, Response} from 'express';
import { createMovieService, deleteMovieService, editMovieService } from "../services/movies.services";

export async function getMovies(req: Request,res: Response) {
    try {
        const movies = await getMoviesDB();
        res.status(200).send(movies.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function getQuantity(req: Request, res: Response){
    const { genre, platform} = req.query as Query;
    try {
        const quantity = await getQuantityDB(genre, platform);
        res.status(200).send(quantity.rows[0])
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function createMovie(req: Request, res: Response){
    const {name, platform, genre, status} = req.body as CreateMovie;

    const movie = createMovieService(name, platform, genre, status);  
    res.sendStatus(200)
}

export async function deleteMovie(req: Request, res: Response) {
    const {id} = req.params;

    deleteMovieService(Number(id))

    res.sendStatus(200);
}

export async function editMovie(req: Request, res: Response){
    const {id} = req.params;

    editMovieService(Number(id))
    res.sendStatus(200);
}