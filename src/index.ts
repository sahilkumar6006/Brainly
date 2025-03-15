import express from 'express'
import { ConnectDb } from './db/index'
import mainRouter from './routes/route';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors());


app.listen(8000, () => {
    console.log("the the server started at ", 8000)
})

app.use('/api/v1', mainRouter)


ConnectDb();

