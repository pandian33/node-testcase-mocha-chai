const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
let origin = 'https://alpha.app.oneairclub.com';
chai.use(chaiHttp);
//describe('Authentication Controller', () => {

let token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY0ODA5NTM5MSwiZXhwIjoxNjQ4MTI0MTkxfQ.5-j3qxpoW2hsCCqwWIva4i0KYcE3AGMI_C2RQljoufk'
describe('API Test Results', () => { 
    // BaseDates Get Countries API //
  it('GET /api/getCountries, returns a valid countries data status 200', (done) => {
    chai.request(origin)
        .get('/api/getCountries')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // BaseDates Get Airlines API //
  it('GET /api/getAirlines, returns a valid airlines data status 200', (done) => {
    chai.request(origin)
        .get('/api/getAirlines')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // BaseDates Get Cabins API //
  it('GET /api/getCabins, returns a valid cabins data status 200', (done) => {
    chai.request(origin)
        .get('/api/getCabins')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // BaseDates Get Cabins API //
  it('GET /api/getCabins, returns a valid cabins data status 200', (done) => {
    chai.request(origin)
        .get('/api/getCabins')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
});