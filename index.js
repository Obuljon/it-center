import express from 'express';
import mongoose from 'mongoose';
import session from 'express-session';
import layout from 'express-ejs-layouts';
import Middlewares from './src/middlewares/middle.js';
import {fileURLToPath} from 'url';
import { dirname, join } from 'path';
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/it-center', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

Middlewares(app);

const Full_Path = dirname(fileURLToPath(import.meta.url));


app.set('view engine', 'ejs');
app.set('views', join(Full_Path, 'src', 'views'));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public")); 
app.use(express.json());
app.use(layout);

app.use(session({
    secret: "School",
    cookie: {maxAge: 1000 * 60 * 60 * 24},
    resave: false,
    saveUninitialized: false
}));
app.use((req, res, next) => {
    res.locals.user = req.session.user || "";
    next();
})


app.listen(8080, () => console.log('server is runnning Port:8080'));

