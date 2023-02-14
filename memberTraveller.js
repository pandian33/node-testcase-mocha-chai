const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
let origin = 'https://alpha.app.oneairclub.com';
chai.use(chaiHttp);
//describe('Authentication Controller', () => {

let token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY0ODEyNjI3OSwiZXhwIjoxNjQ4MTU1MDc5fQ.Jxj0qjax6BTZ6EQ5HndRXjxD-X0N5dcC-38aOE838Cg'
describe('API Test Results', () => { 
// Member Traveller Save Traveller Information API //
  // it('POST /api/saveTravellerInformation, returns a valid traveller data status 200', (done) => {
  //   chai.request(origin)
  //       .post('/api/saveTravellerInformation')
  //       .send( {
  //         travellerId :5,
  //         firstName :"Gomathi",
  //         middleName :"",
  //         lastNam :"Solai",
  //         gender :"Female",
  //         dob :"1997-02-09",
  //         countryCode :"US",
  //         phoneNumber :98937973423,
  //         tsaPrecheck :"443535",
  //         redressNumber :"453454",
  //         specialAssistance :"test",
  //         specialMealRequest :"test",
  //         textAlertFlag :1,
  //         emContactFirstName :"test one user",
  //         emContactLastName :"anna nagar",
  //         emCountryCode :"US",
  //         emPhonenumber :"madurai",
  //         primaryTraveller :1
  //    })
  //       .set({ Authorization: token })
  //       .end((err, res) => {
  //         //console.log("sss",res)
  //           res.should.have.status(200);
  //           done()
  //       });
  // });
  it('POST /api/saveTravellerInformation, returns a valid traveller first name data status 400', (done) => {
    chai.request(origin)
      .post('/api/saveTravellerInformation')
      .send( {
        travellerId :5,
        firstName :"",
        middleName :"",
        lastNam :"Solai",
        gender :"Female",
        dob :"1997-02-09",
        countryCode :"US",
        phoneNumber :98937973423,
        tsaPrecheck :"443535",
        redressNumber :"453454",
        specialAssistance :"test",
        specialMealRequest :"test",
        textAlertFlag :1,
        emContactFirstName :"test one user",
        emContactLastName :"anna nagar",
        emCountryCode :"US",
        emPhonenumber :"madurai",
        primaryTraveller :1
   })
      .set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(400);
          done()
      });
});
it('POST /api/saveTravellerInformation, returns a valid traveller last name data status 400', (done) => {
  chai.request(origin)
    .post('/api/saveTravellerInformation')
    .send( {
      travellerId :5,
      firstName :"Gomathi",
      middleName :"",
      lastNam :"",
      gender :"Female",
      dob :"1997-02-09",
      countryCode :"US",
      phoneNumber :98937973423,
      tsaPrecheck :"443535",
      redressNumber :"453454",
      specialAssistance :"test",
      specialMealRequest :"test",
      textAlertFlag :1,
      emContactFirstName :"test one user",
      emContactLastName :"anna nagar",
      emCountryCode :"US",
      emPhonenumber :"madurai",
      primaryTraveller :1
 })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/saveTravellerInformation, returns not authorized user status 403', (done) => {
    chai.request(origin)
      .post('/api/saveTravellerInformation')
      .send( {
        travellerId :5,
        firstName :"Gomathi",
        middleName :"",
        lastNam :"Solai",
        gender :"Female",
        dob :"1997-02-09",
        countryCode :"US",
        phoneNumber :98937973423,
        tsaPrecheck :"443535",
        redressNumber :"453454",
        specialAssistance :"test",
        specialMealRequest :"test",
        textAlertFlag :1,
        emContactFirstName :"test one user",
        emContactLastName :"anna nagar",
        emCountryCode :"US",
        emPhonenumber :"madurai",
        primaryTraveller :1
   })
      //.set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(403);
          done()
        });
});
// Member Traveller Remove Traveller Information API //
// it('POST /api/removeTravellerInformation, returns a valid traveller data status 200', (done) => {
//   chai.request(origin)
//       .post('/api/removeTravellerInformation')
//       .send({ "travellerId": 3 })
//       .set({ Authorization: token })
//       .end((err, res) => {
//         //console.log("sss",res)
//           res.should.have.status(200);
//           done()
//       });
// });
it('POST /api/removeTravellerInformation, returns a valid Traveller id data status 400', (done) => {
  chai.request(origin)
    .post('/api/removeTravellerInformation')
    .send({ "travellerId": "" })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/removeTravellerInformation, returns not authorized user status 403', (done) => {
    chai.request(origin)
      .post('/api/removeTravellerInformation')
      .send({ "travellerId": 3 })
      //.set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(403);
          done()
        });
});
// Member Traveller Save Traveller Passport API //
it('POST /api/saveTravellerPassport, returns a valid traveller data status 200', (done) => {
  chai.request(origin)
      .post('/api/saveTravellerPassport')
      .send({
         travellerId :7,
         passportCountry :"US",
         passportExpiryDat :"2022-01-09"
    })
      .set({ Authorization: token })
      .end((err, res) => {
        //console.log("sss",res)
          res.should.have.status(200);
          done()
      });
});
it('POST /api/saveTravellerPassport, returns a valid Traveller id data status 400', (done) => {
  chai.request(origin)
    .post('/api/saveTravellerPassport')
    .send({
      travellerId :'',
      passportCountry :"US",
      passportExpiryDat :"2022-01-09"
 })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/saveTravellerPassport, returns not authorized user status 403', (done) => {
    chai.request(origin)
      .post('/api/saveTravellerPassport')
      .send({
        travellerId :7,
        passportCountry :"US",
        passportExpiryDat :"2022-01-09"
  })
      //.set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(403);
          done()
        });
});
// Member Traveller Remove Traveller Passport API //
// it('POST /api/removeTravellerPassport, returns a valid traveller data status 200', (done) => {
//   chai.request(origin)
//       .post('/api/removeTravellerPassport')
//       .send({
//           travellerId :4,
//           passportId :2  })
//       .set({ Authorization: token })
//       .end((err, res) => {
//         //console.log("sss",res)
//           res.should.have.status(200);
//           done()
//       });
// });
it('POST /api/removeTravellerPassport, returns a valid Passport id data status 400', (done) => {
  chai.request(origin)
    .post('/api/removeTravellerPassport')
    .send({
      travellerId : '',
      passportId : 2  })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/removeTravellerPassport, returns a valid traveller id data status 400', (done) => {
  chai.request(origin)
    .post('/api/removeTravellerPassport')
    .send({
      travellerId : 4,
      passportId : ''  })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/removeTravellerPassport, returns a valid Passport id and traveller id data status 400', (done) => {
  chai.request(origin)
    .post('/api/removeTravellerPassport')
    .send({
      travellerId : '' ,
      passportId : ''  })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/removeTravellerPassport, returns not authorized user status 403', (done) => {
    chai.request(origin)
      .post('/api/removeTravellerPassport')
      .send({
        travellerId : 4,
        passportId : 2  })
      //.set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(403);
          done()
        });
});
// Member Traveller Save Traveller FrequentFlyer API //
it('POST /api/saveTravellerFrequentFlyer, returns a valid traveller data status 200', (done) => {
  chai.request(origin)
      .post('/api/saveTravellerFrequentFlyer')
      .send({
         travellerId :1,
         frequentFlyerId :1,
         frequentFlyerProgram :"56456456",
         programNumber :"123456767"
    })
      .set({ Authorization: token })
      .end((err, res) => {
        //console.log("sss",res)
          res.should.have.status(200);
          done()
      });
});
it('POST /api/saveTravellerFrequentFlyer, returns a valid traveller id data status 400', (done) => {
  chai.request(origin)
    .post('/api/saveTravellerFrequentFlyer')
    .send({
      travellerId : '' ,
      frequentFlyerId :1,
      frequentFlyerProgram :"56456456",
      programNumber :"123456767"
 })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/saveTravellerFrequentFlyer, returns not authorized user status 403', (done) => {
    chai.request(origin)
      .post('/api/saveTravellerFrequentFlyer')
      .send({
        travellerId : 4,
        passportId : 2  })
      //.set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(403);
          done()
        });
});
// Member Traveller Remove Traveller FrequentFlyer API //
// it('POST /api/removeTravellerFrequentFlyer, returns a valid traveller data status 200', (done) => {
//   chai.request(origin)
//       .post('/api/removeTravellerFrequentFlyer')
//       .send( {
//          frequentFlyerId :2,
//          travellerId :2
//     })
//       .set({ Authorization: token })
//       .end((err, res) => {
//         //console.log("sss",res)
//           res.should.have.status(200);
//           done()
//       });
// });
it('POST /api/removeTravellerFrequentFlyer, returns a valid frequent flyer id data status 400', (done) => {
  chai.request(origin)
    .post('/api/removeTravellerFrequentFlyer')
    .send( {
      frequentFlyerId :'',
      travellerId :3
 })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/removeTravellerFrequentFlyer, returns a valid frequent flyer id and traveller id data status 500', (done) => {
  chai.request(origin)
    .post('/api/removeTravellerFrequentFlyer')
    .send( {
      frequentFlyerId :4,
      travellerId : 5
 })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(500);
        done()
    });
});
it('POST /api/removeTravellerFrequentFlyer, returns a valid traveller id data status 400', (done) => {
  chai.request(origin)
    .post('/api/removeTravellerFrequentFlyer')
    .send( {
      frequentFlyerId :2,
      travellerId :''
 })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/removeTravellerFrequentFlyer, returns not authorized user status 403', (done) => {
    chai.request(origin)
      .post('/api/removeTravellerFrequentFlyer')
      .send({
        travellerId : 4,
        passportId : 2  })
      //.set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(403);
          done()
        });
});
// Member Traveller Get Traveller Information API //
it('GET /api/getTravellerInformation, returns a valid traveller data status 200', (done) => {
  chai.request(origin)
      .get('/api/getTravellerInformation')
      .query()
      .set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(200);
          done()
      });
});
});