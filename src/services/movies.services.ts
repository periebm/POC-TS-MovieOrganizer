import { conflictError, notFoundError } from "../errors/errors";
import { createMovieDB, deleteGenreByMovieIdDB, deleteMovieByIdDB, editStatusByIdDB, getMoviesByIdDB, getMoviesByNameDB } from "../repositories/movie.repository";


export async function createMovieService(name: string, platform: string, genre: string, status: boolean){
    const existingMovie = await getMoviesByNameDB(name);
    if(existingMovie.rowCount) throw conflictError(name);

    return await createMovieDB(name, platform, status)
}

export async function deleteMovieService(id:number){
    const existingMovie = await getMoviesByIdDB(id); 
    if(!existingMovie.rowCount) throw notFoundError(id);

    await deleteGenreByMovieIdDB(id);

    return await deleteMovieByIdDB(id);
}

export async function editMovieService(id:number){
    const existingMovie = await getMoviesByIdDB(id); 
    if(!existingMovie.rowCount) throw notFoundError(id);

    return await editStatusByIdDB(id);
}
