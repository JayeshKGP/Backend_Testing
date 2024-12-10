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


describe('Root', () => {
  it('root request', async () => {
    const res = await request(server).get('/');
    expect(res.status).to.equal(200);
  });
});
