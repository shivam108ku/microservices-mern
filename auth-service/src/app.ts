import express, { Request, Response } from 'express';
import logger from './config/logger';
import authRouter from './routes/auth';
import createHttpError, { HttpError } from 'http-errors';
import { NextFunction } from 'connect';

const app = express();

// Middleware for parsing JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome Shivam');
});

app.use('/auth', authRouter); 

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

export default app;
