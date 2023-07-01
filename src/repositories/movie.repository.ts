import { db } from "../database/db.connection";
import { Movies, QueryQuantity } from "../protocols/movies.protocols";

export function getMoviesDB() {
    return db.query<Movies>(
        `SELECT movies.id, movies.name, movies.platform, movies.status, array_agg(genres.genre) AS genres
        FROM movies
        LEFT JOIN genres ON movies.id = genres.movie_id
        GROUP BY movies.id;`
    )
}

export function getQuantityDB(genre: string, platform: string) {
    let query = `
    SELECT COUNT(*) AS movie_count
    FROM movies`

    if (genre === undefined && platform === undefined) return db.query<QueryQuantity>(query)

    else if (genre !== undefined && platform === undefined) {
        query += `
    JOIN genres ON movies.id = genres.movie_id
    WHERE LOWER(genres.genre) = LOWER($1);`
        return db.query<QueryQuantity>(query, [genre])
    }

    else if (platform !== undefined && genre === undefined) {
        query += ` WHERE LOWER(platform) = LOWER($1);`

        return db.query<QueryQuantity>(query, [platform])
    }

    else{
        query += `
        JOIN genres ON movies.id = genres.movie_id
        WHERE LOWER(movies.platform) = LOWER($1)
        AND LOWER(genres.genre) = LOWER($2);`

        return db.query<QueryQuantity>(query, [platform,genre])
    }
}

export function getMoviesByNameDB(name:string) {
    return db.query<Movies>(
        `SELECT * FROM movies WHERE name=$1;`, [name]
    )
}

export function getMoviesByIdDB(id:number) {
    return db.query<Movies>(
        `SELECT * FROM movies WHERE id=$1;`, [id]
    )
}

export function createMovieDB(name:string, platform:string, status:boolean){
    return db.query(`INSERT INTO movies (name, platform, status)
    VALUES ($1, $2, $3)`,[name, platform, status])
}

export async function deleteMovieByIdDB(id:number){
    return await db.query(`DELETE FROM movies WHERE id=$1;`, [id])
}

export function deleteGenreByMovieIdDB(id:number){
    return db.query(`DELETE FROM genres WHERE movie_id=$1`,[id])
}

export function editStatusByIdDB(id:number){
    return db.query(`UPDATE movies SET status = $1 WHERE id = $2`,[true, id]);
}