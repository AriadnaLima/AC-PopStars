import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes'
import Mongoose from './config/db';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

Mongoose
routes(app)

app.listen(3030, () => {
    console.log('servidor on');
})

//