const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
let origin = 'https://alpha.app.oneairclub.com';
chai.use(chaiHttp);
//describe('Authentication Controller', () => {

let token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY0ODEyNjI3OSwiZXhwIjoxNjQ4MTU1MDc5fQ.Jxj0qjax6BTZ6EQ5HndRXjxD-X0N5dcC-38aOE838Cg'
describe('API Test Results', () => { 
// Booking Issue Ticket API //
  it('POST /api/issueTicket, returns a valid traveller data status 200', (done) => {
    chai.request(origin)
        .post('/api/issueTicket')
        .send( )
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("sss",res)
            res.should.have.status(200);
            done()
        });
  });
  // Booking Cancel Ticket API //
  it('POST /api/cancelTicket, returns a valid ticket data status 200', (done) => {
    chai.request(origin)
        .post('/api/cancelTicket')
        .send({ orderId :"KDG42A" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("sss",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/cancelTicket, returns a Access denied data status 200', (done) => {
    chai.request(origin)
        .post('/api/cancelTicket')
        .send({ orderId :"" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("sss",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/cancelTicket, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/cancelTicket')
        .send({ orderId :"KDG42A" })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Booking Order View API //
  it('POST /api/orderView, returns a valid ticket data status 200', (done) => {
    chai.request(origin)
        .post('/api/orderView')
        .send({ orderId :"KDG42A" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("sss",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/orderView, returns a Access denied data status 200', (done) => {
    chai.request(origin)
        .post('/api/orderView')
        .send({ orderId :"" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("sss",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/orderView, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/orderView')
        .send({ orderId :"KDG42A" })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
});