import express from 'express';
import layout from 'express-ejs-layouts';
import db from './src/config/db.config.js';


import {fileURLToPath} from 'url';
import {dirname, join} from 'path';

const app = express();
db();

const Full_Path = dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.set('views', join(Full_Path, 'src', 'views'));


app.use(express.urlencoded({extended: true}));
app.use(express.static("public")); 
app.use(express.json());
app.use(layout);
import mainrouter from "./src/router/main.router.js";
app.use(mainrouter);


app.listen(8080, () => console.log('server is runnning Port:8080'));

