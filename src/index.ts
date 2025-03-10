import express from 'express'
import { ConnectDb } from './db/index'


const app = express();

ConnectDb();

