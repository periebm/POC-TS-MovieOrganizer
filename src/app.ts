import express,{json} from "express";
import "express-async-errors";

import moviesRouter from "./routes/movies.routes";
import errorHandler from "./middlewares/error.middleware";

const app = express();

app.use(json());
app.use(moviesRouter);
app.use(errorHandler);


const port= 6000;

app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})



/* 
- Um CRUD para filmes que deve ter o nome, plataforma (Netflix, Prime), gênero e status.
- O update deve ocorrer no momento que você já viu o filme, junto pode-se adicionar uma nota ou resumo.
- A entidade é **filme**, porém você pode criar outras entidades.
- Deve ter uma rota que lista a quantidade de filmes em cada plataforma ou a quantidade por gênero. 
*/