import request from 'supertest';
import app from '../../src/app';

describe('POST /auth/register', () => {
    // Happy end pont test

    describe('Given all fields', () => {
        it('Should be return 201 status code', async () => {
            // AAA

            // Arrange
            const userData = {
                firstName: 'Shivam',
                lstName: 'K',
                email: 'shivamn@gmail.com',
                password: 'secret',
            };
            // Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);
            // Assert
            expect(response.statusCode).toBe(201);
        });

        it('should return valis json repsosne', async () => {
            // AAA

            // Arrange
            const userData = {
                firstName: 'Shivam',
                lstName: 'K',
                email: 'shivamn@gmail.com',
                password: 'secret',
            };
            // Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData);
            // Assert
            expect(
                (response.headers as Record<string, string>)['content-type'],
            ).toEqual(expect.stringContaining('json'));
        });
    });

    describe('Felds are missing', () => {});
});
