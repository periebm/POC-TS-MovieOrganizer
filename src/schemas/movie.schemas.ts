import Joi from "joi";
import { CreateMovie } from "../protocols/movies.protocols";

export const movieSchema = Joi.object<CreateMovie>({
    name: Joi.string().required(),
    genre: Joi.string().required(),
    platform: Joi.string().required(),
    status: Joi.boolean()
})