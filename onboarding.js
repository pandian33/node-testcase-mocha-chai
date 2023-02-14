const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
let origin = 'https://alpha.app.oneairclub.com';
chai.use(chaiHttp);
//describe('Authentication Controller', () => {

let token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY0ODEyNjI3OSwiZXhwIjoxNjQ4MTU1MDc5fQ.Jxj0qjax6BTZ6EQ5HndRXjxD-X0N5dcC-38aOE838Cg'
describe('API Test Results', () => { 
  // Onboarding Get Member Home Airport API //
  it('GET /api/getMemberHomeAirport, returns a valid trips data status 200', (done) => {
    chai.request(origin)
        .get('/api/getMemberHomeAirport')
        .query({ homeAirport : "SFO" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Onboarding Get Active Departure Airports API //
  it('GET /api/getActiveDepartureAirports, returns a valid trips data status 200', (done) => {
    chai.request(origin)
        .get('/api/getActiveDepartureAirports')
        .query({ countryCode : "IN" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Onboarding Get Member Additional Airports API //
  it('GET /api/getMemberAdditionalAirports, returns a valid trips data status 200', (done) => {
    chai.request(origin)
        .get('/api/getMemberAdditionalAirports')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Onboarding Get Member Destinations API //
  it('GET /api/getMemberDestinations, returns a valid trips data status 200', (done) => {
    chai.request(origin)
        .get('/api/getMemberDestinations')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Onboarding Save Member Home Airport API //
  it('POST /api/saveMemberHomeAirport, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/saveMemberHomeAirport')
        .send({ homeAirport :"SFO" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/saveMemberHomeAirport, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/saveMemberHomeAirport')
        .send({ homeAirport : "" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/saveMemberHomeAirport, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveMemberHomeAirport')
        .send({ homeAirport :"SFO" })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Onboarding Save Member Additional Airports API //
  it('POST /api/saveMemberAdditionalAirports, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/saveMemberAdditionalAirports')
        .send({ additionalAirports : ["CHN","HYD","BOM"] })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // it('POST /api/saveMemberAdditionalAirports, returns a valid deals data status 400', (done) => {
  //     chai.request(origin)
  //       .post('/api/saveMemberAdditionalAirports')
  //       .send({ additionalAirports : []  })
  //       .set({ Authorization: token })
  //       .end((err, res) => {
  //           res.should.have.status(400);
  //           done()
  //       });
  // });
  it('POST /api/saveMemberAdditionalAirports, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveMemberAdditionalAirports')
        .send({ additionalAirports : ["CHN","HYD","BOM"] })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Onboarding Save Member Destinations API //
  it('POST /api/saveMemberDestinations, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/saveMemberDestinations')
        .send( {mydestinations:
        [ {"countryCode":"IN","setOffMonths":["September","October","November"]}
        ]
    })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/saveMemberDestinations, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/saveMemberDestinations')
        .send( {mydestinations:
          [ ]
      })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/saveMemberDestinations, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveMemberDestinations')
        .send({ mydestinations:
          [ {"countryCode":"IN","setOffMonths":["September","October","November"]}
          ]
      })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Onboarding Remove Member Destinations API //
   it('POST /api/removeMemberDestinations, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/removeMemberDestinations')
        .send({ memberDestinationId: 1 })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/removeMemberDestinations, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/removeMemberDestinations')
        .send({ memberDestinationId: '' })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/removeMemberDestinations, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/removeMemberDestinations')
        .send({ memberDestinationId: 1 })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Onboarding Get Nearby Airports API //
  it('POST /api/getNearbyAirports, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/getNearbyAirports')
        .send({ latitude:-122.4192000000,
          longitude:37.7793000000 })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/getNearbyAirports, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/getNearbyAirports')
        .send({ latitude:-122.4192000000,
          longitude: '' })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/getNearbyAirports, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/getNearbyAirports')
        .send({ latitude:-122.4192000000,
          longitude:37.7793000000 })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Onboarding Save Questions API //
  it('POST /api/saveQuestions, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/saveQuestions')
        .send({
           countryCode :"GB",
           travellerType :"I have got a bucket of list places",
           barrier :"",
           enjoyment :[],
           travelPartner :[],
           prefferedMonths :[],
           trips :{"shortTrip":"","longTrip":""},
           dealTypes :[]
      })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("sss",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/saveQuestions, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/saveQuestions')
        .send({ })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/saveQuestions, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveQuestions')
        .send({
          countryCode :"GB",
          travellerType :"I have got a bucket of list places",
          barrier :"",
          enjoyment :[],
          travelPartner :[],
          prefferedMonths :[],
          trips :{"shortTrip":"","longTrip":""},
          dealTypes :[]
     })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
});