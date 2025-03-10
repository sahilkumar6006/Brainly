import express from 'express'
import { ConnectDb } from './db/index'


const app = express();

ConnectDb();


app.post("/api/v1/signup", (req, res) => {

})
app.get("/api/v1/content", (req, res) => {

})
app.delete("/api/v1/content", (req, res) => {

})

app.post("/api/v1/brain/share", (req, res) => {

})

app.post("/api/v1/brain/:shareLink", (req, res) => {

})