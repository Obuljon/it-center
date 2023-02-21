import express from 'express';
import layout from 'express-ejs-layouts';
mongoose.set('strictQuery', false)
mongoose.connect('mongodb://localhost/it-center', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static("public")); 
app.use(express.json());
app.use(layout);

app.use('/', router);


app.listen(8080, () => console.log('server is runnning Port:8080'));

