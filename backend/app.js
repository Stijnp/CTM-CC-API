import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import routes from './src/routes/validationRoutes';

const app = express();


// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) =>
    res.json(
        {
            'routes':
            {
                '/numberValidation/{number}':
                {
                    'methods': 'GET',
                    'description': 'Numbers passed as arguments will be checked using the Luhn Algorithm and attached the card type',
                }
            }
        })
);

module.exports = app;