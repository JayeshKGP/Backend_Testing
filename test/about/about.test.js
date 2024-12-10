let chaiHttp;
let request;
let server;
let expect;
let use;

before(async () => {
  expect = (await import('chai')).expect;
  use = (await import('chai')).use;
  chaiHttp = (await import('chai-http')).default;
  request = (await import('supertest')).default;
  server = (await import('../../server.js')).default;

  use(chaiHttp);
});


describe('About', () => {
    it('about request should welcome', async () => {
      const res = await request(server)
        .get('/about')
        .set('name', 'admin'); // Sending 'name' header with value 'admin'
      
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Welcome Admin');
    });
  
    it('about request should be unauthorized', async () => {
      const res = await request(server)
        .get('/about')
        .set('name', 'user'); // Sending 'name' header with value 'user'
      
      expect(res.status).to.equal(401);
      expect(res.text).to.equal('Unauthorized');
    });
});
