import { getMoviesDB } from "../repositories/movie.repository"
import {Request, Response} from 'express';

export async function getMovies(req: Request,res: Response) {
    try {
        const movies = await getMoviesDB();
        res.status(200).send(movies.rows)
    } catch (err) {
        res.status(500).send(err.message)
    }
}