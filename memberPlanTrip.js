const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
let origin = 'https://alpha.app.oneairclub.com';
chai.use(chaiHttp);
//describe('Authentication Controller', () => {

let token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY0ODEyNjI3OSwiZXhwIjoxNjQ4MTU1MDc5fQ.Jxj0qjax6BTZ6EQ5HndRXjxD-X0N5dcC-38aOE838Cg'
describe('API Test Results', () => { 
// Save Member Plan Trip API //
it('POST /api/saveMemberPlanTrip, returns a trips data status 200', (done) => {
    chai.request(origin)
        .post('/api/saveMemberPlanTrip')
        .send({ planTripName :"Summer trip",
          fromCityId :279,
          where :"GB",
          when : {"fromDate":"","toDate":""},
          cabinCode : "Y",
          alliances :[],
          airlines :[],
          stop :[] })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/saveMemberPlanTrip, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveMemberPlanTrip')
        .send({ planTripName :"Summer trip",
        fromCityId :279,
        where :"GB",
        when : {"fromDate":"","toDate":""},
        cabinCode : "Y",
        alliances :[],
        airlines :[],
        stop :[] })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Remove Member Plan Trip API //
  // it('POST /api/removeMemberPlanTrip, returns a trips deals data status 200', (done) => {
  //   chai.request(origin)
  //       .post('/api/removeMemberPlanTrip')
  //       .send({ memberPlanTripId :9 })
  //       .set({ Authorization: token })
  //       .end((err, res) => {
  //           res.should.have.status(200);
  //           done()
  //       });
  // });
  it('POST /api/removeMemberPlanTrip, returns a trips deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/removeMemberPlanTrip')
        .send({ memberPlanTripId : '' })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/removeMemberPlanTrip, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/removeMemberPlanTrip')
        .send({ memberPlanTripId :6 })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Preview Plan Trip API //
  it('POST /api/previewPlanTrip, returns a valid trips data status 200', (done) => {
    chai.request(origin)
        .post('/api/previewPlanTrip')
        .send({
           planTripName :"Summer Trip",
           where :"GB",
           when :{"fromDate":"2022-01-01","toDate":"2022-01-25"},
           cabinCode :"Y",
           alliances :[],
           airlines :["UA","LX"],
           stops :["1"]
      })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/previewPlanTrip, returns a valid trips data status 400', (done) => {
    chai.request(origin)
      .post('/api/previewPlanTrip')
      .send({  })
      .set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(400);
          done()
      });
  });
  it('POST /api/previewPlanTrip, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/previewPlanTrip')
        .send({
          planTripName :"Summer Trip",
          where :"GB",
          when :{"fromDate":"2022-01-01","toDate":"2022-01-25"},
          cabinCode :"Y",
          alliances :[],
          airlines :["UA","LX"],
          stops :["1"]
     })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Get Member Plan Trip API //
  it('GET /api/getMemberPlanTrip, returns a valid trips data status 200', (done) => {
    chai.request(origin)
        .get('/api/getMemberPlanTrip')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
});