import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from 'passport';

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect(process.env.MLAB_URI);

app.get('/', (req, res)=> res.end("Hello world"));

app.listen(port, (err)=> console.log(err ? err : ""));
