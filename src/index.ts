import express from 'express'
import { ConnectDb } from './db/index'
import mainRouter from './routes/route';


const app = express();

app.use(express.json());


app.listen(3000, () => {
    console.log("the the server started at ", 3000)
})

app.use('api/v1', mainRouter)

ConnectDb();

