
export type Movies = {
    id: number,
    name: string,
    platform: string,
    status: boolean,
    genre: (Array<string> | null)
}

export type CreateMovie = {
    name: string,
    platform: string,
    status: boolean,
    genre: string
}


export type Query = {
    genre: string|undefined, platform: string|undefined
}

export type QueryQuantity = {
    movie_count: string
}

