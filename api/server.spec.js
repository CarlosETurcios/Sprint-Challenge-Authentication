const request = require('supertest');
const server = require('./server');

describe('server test', () => {
  it('should set up the testing envirement', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });
  describe('GET/', () => {
    it('should return a 200', () => {
      return request(server)
        .get('/')
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it('should return text/html type', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('text/html');
    });
  });
});
