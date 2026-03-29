import { Request, Response } from 'express';
// import { prisma } from '../config/database';
import logger from '../config/logger';

export class AuthController {
    async register(req: Request, res: Response) {
        try {
            const { email, name, password } = req.body;

            logger.info('Registration attempt', { email });
            
            // Temporary response until Prisma client is generated
            res.status(201).json({ 
                message: 'Registration endpoint working - Prisma client will be enabled after generation',
                data: { email, name }
            });

        } catch (error) {
            logger.error('Registration error:', error);
            res.status(500).json({
                errors: [{
                    type: 'ServerError',
                    msg: 'Internal server error',
                    path: '',
                    location: ''
                }]
            });
        }
    }
}
