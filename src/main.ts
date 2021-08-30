import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import connection from './database/connection';
import { personRoute } from './routes/personRoutes';
import { loginRoute } from './routes/loginRoute';

const app = express();
dotenv.config({ path: './.env' })

// Settings
app.set('port', process.env.PORT || 4000);
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));


// Routes
personRoute(app);
loginRoute(app);

//Server

const main = async () => {
    try {
        await app.listen(app.get('port'))
        console.info(`Server running on port ${app.get('port')}`)
        connection()
    } catch (error) {
        throw new Error(`Server errror ${error}`)
    }
}

main();