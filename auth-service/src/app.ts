import express, { Request, Response } from 'express';
import logger from './config/logger';
import authRouter from './routes/auth';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import createHttpError, { HttpError } from 'http-errors';
import { NextFunction } from 'connect';

const app = express();

app.get('/', (req, res) => {
    // const err = createHttpError(401, 'Cant access');
    // next(err);
    res.send('Welcome Shivam');
});

app.use('/auth', authRouter);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
