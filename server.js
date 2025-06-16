import express from 'express';
import bodyParser from 'body-parser';
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path'
import pg from 'pg';
import bcrypt from 'bcrypt';
import passport from 'passport';


const app = express();
const port = process.env.port || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));


const db = new pg.Client({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
    host: process.env.PG_HOST
});

app.cors({
    origin:"http://localhost:8080",
    credentials:true
});











































































































































































    
}));

app.listen(port, (req, res) => {
    console.log(`Server is running on ${port}`);
});