const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
let origin = 'https://alpha.app.oneairclub.com';
chai.use(chaiHttp);
//describe('Authentication Controller', () => {
  const testUser = {
    emailId: 'mani@yopmail.com',
    password: 'Test@12345'
  };
  const testUserFake = {
    emailId: 'fake@yopmail.com',
    password: 'fake'
  };
  const testUserEmpty = {
    emailId: '',
    password: ''
  };

  const testSignup = {
    emailId: "kannswbs@yopmail.com",
    displayName: "",
    password: "123456789aa"
  };
  const memberSignup = {
    emailId: "mani@yopmail.com",
    displayName: "",
    password: "123456789"
  };
  const cabin = { cabinClass: "Economy" };

  let token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY0ODEyNjI3OSwiZXhwIjoxNjQ4MTU1MDc5fQ.Jxj0qjax6BTZ6EQ5HndRXjxD-X0N5dcC-38aOE838Cg'

describe('API Test Results', () => {
  it('POST /api/login , results in status 200', (done) => {
    chai.request(origin)
        .post('/api/login')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(testUser)
        .end((err, res) => {
            res.should.have.status(200);
            done();
        });
  });
  it('POST /api/login , incorrect username or password , status 400', (done) => {
    chai.request(origin)
        .post('/api/login')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send(testUserFake)
        .end((err, res) => {
          //console.log("sss",res)
            res.should.have.status(400);
            done();
        });
  });
  it('POST /api/login , missing password , status 400', (done) => {
    chai.request(origin)
        .post('/api/login')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
          emailId: 'mani@yopmail.com',
          password: ''
        })
        .end((err, res) => {
          //console.log("sss",res)
            res.should.have.status(400);
            done();
        });
  });
  it('POST /api/login , missing username  , status 400', (done) => {
    chai.request(origin)
        .post('/api/login')
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .send({
          emailId: '',
          password: 'Test@12345'
        })
        .end((err, res) => {
          //console.log("sss",res)
            res.should.have.status(400);
            done();
        });
  });
  it('POST /api/login , missing username or password , status 400', (done) => {
    chai.request(origin)
      .post('/api/login')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(testUserEmpty)
      .end((err, res) => {
        //console.log("missing",res)
          res.should.have.status(400);
          done();
    });
  });
  // it('POST /api/signup, data status 200', (done) => {
  //     chai.request(origin)
  //       .post('/api/signup')
  //       .set('Accept', 'application/json')
  //       .set('Content-Type', 'application/json')
  //       .send(testSignup)
  //       .end((err, res) => {
  //         //console.log("signup",err)
  //           res.should.have.status(200);
  //           done()
  //     });
  // });
  it('POST /api/signup, Mailid or Password Empty 400', (done) => {
    chai.request(origin)
      .post('/api/signup')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send({ emailId: "kbs@yopmail.com", displayName: "", password: "" })
      .end((err, res) => {
        //console.log("signup",err)
          res.should.have.status(400);
          done()
      });
  });
  it('POST /api/signup,  Member already exist status 400', (done) => {
    chai.request(origin)
      .post('/api/signup')
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .send(memberSignup)
      .end((err, res) => {
        //console.log("signup",err)
          res.should.have.status(400);
          done()
    });
  });

  // Member Social Media Signup API //
  // it('POST /api/socialMediaSignup, returns a valid deals data status 200', (done) => {
  //   chai.request(origin)
  //       .post('/api/socialMediaSignup')
  //       .send({
  //         emailId :"gomathioptisoll66@gmail.com",
  //         deviceType :"Web",
  //         socialMediaType :"Gmail" })
  //       .set({ Authorization: token })
  //       .end((err, res) => {
  //         //console.log("signup",res)
  //           res.should.have.status(200);
  //           done()
  //       });
  // });
  it('POST /api/socialMediaSignup, Member already exist status 400', (done) => {
    chai.request(origin)
        .post('/api/socialMediaSignup')
        .send({
          emailId :"gomathioptisoll6@gmail.com",
          deviceType :"Web",
          socialMediaType :"Gmail" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/socialMediaSignup, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/socialMediaSignup')
        .send({
          emailId :"",
          deviceType :"Web",
          socialMediaType :"Gmail" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/socialMediaSignup, returns not authorized user status 400', (done) => {
      chai.request(origin)
        .post('/api/socialMediaSignup')
        .send({
          emailId :"gomathioptisoll6@gmail.com",
          deviceType :"Web",
          socialMediaType :"Gmail" })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
          });
  });
  // Member Get Stage API //
  it('GET /api/getStage, returns a valid search data status 200', (done) => {
    chai.request(origin)
        .get('/api/getStage')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Member Get Profile Data API //
  it('GET /api/getProfileData, returns a valid search data status 200', (done) => {
    chai.request(origin)
        .get('/api/getProfileData')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Get Member Alliance API //
  it('GET /api/getMemberAlliance, returns a valid search data status 200', (done) => {
    chai.request(origin)
        .get('/api/getMemberAlliance')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Get Member Airlines API //
  it('GET /api/getMemberAirlines, returns a valid search data status 200', (done) => {
    chai.request(origin)
        .get('/api/getMemberAirlines')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Member Get Deal Settings API //
  it('GET /api/getDealSettings, returns a valid search data status 200', (done) => {
    chai.request(origin)
        .get('/api/getDealSettings')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Member Get Notification Settings API //
  it('GET /api/getNotificationSettings, returns a valid search data status 200', (done) => {
    chai.request(origin)
        .get('/api/getNotificationSettings')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // Member Forgot Password API //
  it('POST /api/forgotPassword, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/forgotPassword')
        .send({ emailId :"mani@yopmail.com" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/forgotPassword, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/forgotPassword')
        .send({ emailId :"" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
//   it('POST /api/forgotPassword, returns not authorized user status 403', (done) => {
//       chai.request(origin)
//         .post('/api/forgotPassword')
//         .send({ emailId :"mani@yopmail.com" })
//         //.set({ Authorization: token })
//         .end((err, res) => {
//             res.should.have.status(403);
//             done()
//           });
//   });
  // Member Change Password API //
  it('POST /api/changePassword, returns a valid password data status 200', (done) => {
    chai.request(origin)
        .post('/api/changePassword')
        .send({ new_password : "Test@12345", password : "Test@12345" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
    it('POST /api/changePassword, Old password not correct  400', (done) => {
    chai.request(origin)
        .post('/api/changePassword')
        .send({ new_password : "Test@12345", password : "Test@12345s" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/changePassword, Password is empty status 400', (done) => {
      chai.request(origin)
        .post('/api/changePassword')
        .send({ new_password : "", password : "Test@12345" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/changePassword, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/changePassword')
        .send({ new_password : "Test@12345", password : "Test@12345" })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Member memberConfirmation API //
  it('POST /api/memberConfirmation, returns a valid token data status 200', (done) => {
    chai.request(origin)
        .post('/api/memberConfirmation')
        .send({ token :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTYzMjIyOTQ3MX0.nf_IDIpqrVEeVXqfEiG7YRk0XxG-t1GgBi_HHQGPvgI" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/memberConfirmation, token is empty status 400', (done) => {
      chai.request(origin)
        .post('/api/memberConfirmation')
        .send({ token :"" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
// Member Reset Password API //
  it('POST /api/resetPassword, returns a valid password data status 200', (done) => {
    chai.request(origin)
        .post('/api/resetPassword')
        .send({ new_password :"123456789",
          token :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTYzMjIzMTIxNH0.iILk76VhQ1YacXTJxBvsZFXxbhldVFRzEyJh6VFhKeU" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/resetPassword, Token or Password is valid status 400', (done) => {
      chai.request(origin)
        .post('/api/resetPassword')
        .send({ new_password :"123456789",
        token :"" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  // Member Save Member Alliance API //
  it('POST /api/saveMemberAlliance, returns a valid Alliance data status 200', (done) => {
    chai.request(origin)
        .post('/api/saveMemberAlliance')
        .send({ alliances :["Oneworld","Skyteam","Star"] })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/saveMemberAlliance, returns a valid Alliance data status 400', (done) => {
      chai.request(origin)
        .post('/api/saveMemberAlliance')
        .send({ alliances :[] })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/saveMemberAlliance, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveMemberAlliance')
        .send({ alliances : ["Oneworld","Skyteam","Star"] })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Member Save Member Airlines API //
  it('POST /api/saveMemberAirlines, returns a valid Alliance data status 200', (done) => {
    chai.request(origin)
        .post('/api/saveMemberAirlines')
        .send({ airlines :[{"airlineCode":"UA","prefferedFlag":1},{"airlineCode":"SA","prefferedFlag":1}] })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/saveMemberAirlines, returns a valid Alliance data status 400', (done) => {
      chai.request(origin)
        .post('/api/saveMemberAirlines')
        .send({ airlines :[] })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/saveMemberAirlines, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveMemberAirlines')
        .send({ airlines :[{"airlineCode":"UA","prefferedFlag":1},{"airlineCode":"SA","prefferedFlag":1}] })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Member Save Deal Settings API //
  it('POST /api/saveDealSettings, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/saveDealSettings')
        .send({
              dealSettings :[{ "memberCabinDealPrefId":1,"cabinClass":"First Class", "emailFlag":1,"mobileFlag":0 },
              { "memberCabinDealPrefId":2,"cabinClass":"Business Class", "emailFlag":1,"mobileFlag":1 },
              { "memberCabinDealPrefId":3,"cabinClass":"Premium Economy", "emailFlag":1,"mobileFlag":0}
             
              ]
          })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/saveDealSettings, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/saveDealSettings')
        .send({
          dealSettings :[] })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/saveDealSettings, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveDealSettings')
        .send({
          dealSettings :[{ "memberCabinDealPrefId":1,"cabinClass":"First Class", "emailFlag":1,"mobileFlag":0 },
          { "memberCabinDealPrefId":2,"cabinClass":"Business Class", "emailFlag":1,"mobileFlag":1 },
          { "memberCabinDealPrefId":3,"cabinClass":"Premium Economy", "emailFlag":1,"mobileFlag":0}
         
          ]
      })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Member Save Notification Settings API //
  // it('POST /api/saveNotificationSettings, returns a valid deals data status 200', (done) => {
  //   chai.request(origin)
  //       .post('/api/saveNotificationSettings')
  //       .send({"memberNotificationId":1,
  //       "dealAlertEmailFlag":"0","dealAlertMobileFlag":"0","tripAlertEmailFlag":"1","tripAlertMobileFlag":"1","specialOfferEmailFlag":"1","specialOfferMobileFlag":"1","marketingPromotionEmailFlag":"1",
  //       "marketingPromotionMobileFlag":"1","productUpdateEmailFlag":"1",
  //        "productUpdateMobileFlag":"1","eduMessageEmailFlag":"1","eduMessageMobileFlag":"1","subscribeFlag":"1"})
  //       .set({ Authorization: token })
  //       .end((err, res) => {
  //           res.should.have.status(200);
  //           done()
  //       });
  // });
  it('POST /api/saveNotificationSettings, returns a valid deals data status 500', (done) => {
      chai.request(origin)
        .post('/api/saveNotificationSettings')
        .send({"memberNotificationId":1,
        "dealAlertEmailFlag":"0","dealAlertMobileFlag":"0","tripAlertEmailFlag":"1","tripAlertMobileFlag":"1","specialOfferEmailFlag":"1","specialOfferMobileFlag":"1","marketingPromotionEmailFlag":"1",
        "marketingPromotionMobileFlag":"1","productUpdateEmailFlag":"1",
         "productUpdateMobileFlag":"1","eduMessageEmailFlag":"1","eduMessageMobileFlag":"1","subscribeFlag":"1"})
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(500);
            done()
        });
  });
  it('POST /api/saveNotificationSettings, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveNotificationSettings')
        .send({"memberNotificationId":1,
        "dealAlertEmailFlag":"0","dealAlertMobileFlag":"0","tripAlertEmailFlag":"1","tripAlertMobileFlag":"1","specialOfferEmailFlag":"1","specialOfferMobileFlag":"1","marketingPromotionEmailFlag":"1",
        "marketingPromotionMobileFlag":"1","productUpdateEmailFlag":"1",
         "productUpdateMobileFlag":"1","eduMessageEmailFlag":"1","eduMessageMobileFlag":"1","subscribeFlag":"1"})
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Member Save Membership Level API //
  it('POST /api/saveMembershipLevel, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/saveMembershipLevel')
        .send({ membershipLevel :"Basic" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/saveMembershipLevel, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/saveMembershipLevel')
        .send({ membershipLevel :"" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/saveMembershipLevel, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/saveMembershipLevel')
        .send({ membershipLevel :"Basic" })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  
});
