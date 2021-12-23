import supertest from 'supertest';
import app from '../index';

const request = supertest(app);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    }
)
    it('gets the api endpoint to work with Pramters', async () => {
        const response = await request.get('/api/images?fileName=fjord&width=560&height=900');
        expect(response.status).toBe(200);
    }
)});
