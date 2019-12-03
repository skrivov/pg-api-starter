import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import routes from './routes';
 
const app = express();

// Application-Level Middleware

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(async (req, res, next) => {
//   req.context = {
     
//   };
//   next();
// });

// Routes

app.use('/speakers', routes.speaker);
app.use('/sessions', routes.session);

// Start

const eraseDatabaseOnSync = false;


app.listen(process.env.PORT, () =>
    console.log(`API is runing on port ${process.env.PORT}!`),
 );

 export default app;

 