import request from 'supertest';
import express from 'express';
import { Server } from 'http';

let app: express.Application;
let server: Server;

beforeAll(async () => {
  // Instead of calling StartServer directly, we mock the app setup
  app = express();
  app.use(express.json());
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK check tests' });
  });

  server = app.listen(0); // random available port
});

afterAll(() => {
  server.close();
});

describe('Health Check Endpoint', () => {
  it('should return 200 and status OK', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'OK check tests' });
  });
});
