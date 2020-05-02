const request = require('supertest');
const auth = require('../api/server');

describe('auth test', () => {
  describe('post register', () => {
    let data = {
      name: 'dummy',
      password: 'dummy',
    };
    it('should retrun a 200', async () => {
      const res = await request(auth).post('/register').send(data);
    });
    it('should post 404 with out signing in', async () => {
      const res = await request(auth)
        .post('/register')
        .then((res) => {
          expect(res.status).toBe(404);
        });
    });
  });
  describe('test for login', () => {
    let data = {
      name: 'dummy',
      password: 'dummy',
    };
    it('should retrun a 200', async () => {
      const res = await request(auth).post('/login').send(data);
    });
    it('should post 404 with out signing in', async () => {
      const res = await request(auth)
        .post('/login')
        .then((res) => {
          expect(res.status).toBe(404);
        });
    });
  });
});
