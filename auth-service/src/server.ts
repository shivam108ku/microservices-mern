import { Config } from './config';
import app from './app';
import logger from './config/logger';
import { connectDatabase, disconnectDatabase } from './config/database';

const startServer = async () => {
    const PORT = Config.PORT;
    try {
        // Connect to database first
        await connectDatabase();
        
        app.listen(PORT, () => {
            logger.info('Listening on port', { port: PORT });
        });
        
        // Graceful shutdown
        process.on('SIGINT', async () => {
            logger.info('Shutting down server...');
            await disconnectDatabase();
            process.exit(0);
        });
        
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
