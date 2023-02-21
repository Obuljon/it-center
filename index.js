import express from 'express';
import layout from 'express-ejs-layouts';
import router from './src/router/home.router.js';
import db from './src/config/db.config.js';
const app = express();

db();

app.set('view engine', 'ejs');
app.set('views', "./src/views")
app.use(express.urlencoded({extended: true}));
app.use(express.static("public")); 
app.use(express.json());
app.use(layout);

app.use('/', router);


app.listen(8080, () => console.log('server is runnning Port:8080'));

