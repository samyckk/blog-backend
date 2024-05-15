import express from 'express';
import Connection from './databse/db.js';
import Router from './routes/route.js';

import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

// if(process.env.NODE_ENV === "production"){
//     app.use(express.static("client/build"));
// }


const PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{console.log(`server listening on port ${PORT}`)});

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

Connection();