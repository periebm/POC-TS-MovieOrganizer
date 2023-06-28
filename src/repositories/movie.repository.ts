import { db } from "../database/db.connection";
import { Movies } from "../protocols/movies.protocols";

export function getMoviesDB(){
    return db.query<Movies>(
        `SELECT movies.id, movies.name, movies.platform, movies.status, array_agg(genres.genre) AS genres
        FROM movies
        LEFT JOIN genres ON movies.id = genres.movie_id
        GROUP BY movies.id;`
    )
}

