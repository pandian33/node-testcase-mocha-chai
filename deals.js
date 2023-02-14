const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
let origin = 'https://alpha.app.oneairclub.com';
chai.use(chaiHttp);
//describe('Authentication Controller', () => {

let token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY0ODEyNjI3OSwiZXhwIjoxNjQ4MTU1MDc5fQ.Jxj0qjax6BTZ6EQ5HndRXjxD-X0N5dcC-38aOE838Cg'
describe('API Test Results', () => { 
    // Trending Deals Deals API //
    it('POST /api/trendingDeals, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/trendingDeals')
        .send({ cabinClass: "Economy" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/trendingDeals, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/trendingDeals')
        .send({ cabinClass: '' })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/trendingDeals, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/trendingDeals')
        .send({ cabinClass: 'Economy' })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Destination Deals API //
  it('POST /api/destinationDeals, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/destinationDeals')
        .send({ cabinClass: "Economy" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  // it('POST /api/destinationDeals, returns a valid deals data status 502', (done) => {
  //     chai.request(origin)
  //       .post('/api/destinationDeals')
  //       .send({ cabinClass: '' })
  //       .set({ Authorization: token })
  //       .end((err, res) => {
  //         //console.log("signup",res)
  //           res.should.have.status(502);
  //           done()
  //       });
  // });
  // it('POST /api/destinationDeals, returns not authorized user status 502', (done) => {
  //     chai.request(origin)
  //       .post('/api/destinationDeals')
  //       .send({ cabinClass: 'Economy' })
  //       //.set({ Authorization: token })
  //       .end((err, res) => {
  //         //console.log("signup",res)
  //           res.should.have.status(502);
  //           done()
  //         });
  // });
  // Deal Deatil API //
  it('POST /api/dealDetail, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/dealDetail')
        .send({ routeId: 44, offset: 0, limit: 5 })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("dealDetail",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/dealDetail, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/dealDetail')
        .send({ routeId: '',
          offset: '',
          limit: '' })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/dealDetail, returns a valid deals data status 400', (done) => {
    chai.request(origin)
      .post('/api/dealDetail')
      .send({ routeId: 44,
        offset: 0,
        limit: '' })
      .set({ Authorization: token })
      .end((err, res) => {
        //console.log("signup",res)
          res.should.have.status(400);
          done()
      });
  });
  it('POST /api/dealDetail, returns a valid deals data status 400', (done) => {
    chai.request(origin)
      .post('/api/dealDetail')
      .send({ routeId: '',
        offset: 0,
        limit: '' })
      .set({ Authorization: token })
      .end((err, res) => {
        //console.log("signup",res)
          res.should.have.status(400);
          done()
      });
  });
  it('POST /api/dealDetail, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/dealDetail')
        .send({ routeId: 44,
          offset: 0,
          limit: 5 })
        //.set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(403);
            done()
          });
  });
 // Update Member Wishlist API //
  it('POST /api/updateMemberWishlist, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/updateMemberWishlist')
        .send({ routeId: 24, action: "add" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("dealDetail",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/updateMemberWishlist, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/updateMemberWishlist')
        .send({ routeId: '',
        action: "add"  })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/updateMemberWishlist, returns a valid deals data status 400', (done) => {
    chai.request(origin)
      .post('/api/updateMemberWishlist')
      .send({ routeId: 44,
      action: ""  })
      .set({ Authorization: token })
      .end((err, res) => {
        //console.log("signup",res)
          res.should.have.status(400);
          done()
      });
});
  it('POST /api/updateMemberWishlist, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/updateMemberWishlist')
        .send({ routeId: 44,
          offset: 0,
          limit: 5 })
        //.set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(403);
            done()
          });
  });
  // Wishlist Deals API //
  it('POST /api/wishlistDeals, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/wishlistDeals')
        .send({ cabinClass: "Economy" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("dealDetail",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/wishlistDeals, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/wishlistDeals')
        .send({ cabinClass: "" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/wishlistDeals, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/wishlistDeals')
        .send({ cabinClass: "Economy" })
        //.set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(403);
            done()
          });
  });
  // Search Flight Deals API //
  it('POST /api/searchFlightDeals, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/searchFlightDeals')
        .send({
          fromCities : [279],
          to : ["Europe"],
          when : [],
          cabinCode : "Y",
          stops : [],
          minPrice : 1000, maxPrice : 3000 })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("dealDetail",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/searchFlightDeals, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/searchFlightDeals')
        .send({
          fromCities : "",
          to : ["Europe"],
          when : [],
          cabinCode : "Y",
          stops : [],
          minPrice : 1000, maxPrice : 3000 })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/searchFlightDeals, Please select any from and to location to get deals data status 400', (done) => {
    chai.request(origin)
      .post('/api/searchFlightDeals')
      .send({
        fromCities : [279],
        to : ["Europe"],
        when : [],
        cabinCode : "",
        stops : [],
        minPrice : 1000, maxPrice : 3000 })
      .set({ Authorization: token })
      .end((err, res) => {
        //console.log("signup",res)
          res.should.have.status(400);
          done()
      });
  });
  it('POST /api/searchFlightDeals, Please select any from and to location to get deals data status 400', (done) => {
    chai.request(origin)
      .post('/api/searchFlightDeals')
      .send({
        fromCities : [279],
        to : ["Europe"],
        when : [],
        cabinCode : "Y",
        stops : [],
        minPrice : '', maxPrice : '' })
      .set({ Authorization: token })
      .end((err, res) => {
        //console.log("signup",res)
          res.should.have.status(400);
          done()
      });
  });
  it('POST /api/searchFlightDeals, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/searchFlightDeals')
        .send({
          fromCities : [279],
          to : ["Europe"],
          when : [],
          cabinCode : "Y",
          stops : [],
          minPrice : 1000, maxPrice : 3000 })
        //.set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(403);
            done()
          });
  });
  // Past Deals API //
  it('POST /api/pastDeals, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/pastDeals')
        .send({ cabinClass: "Economy" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/pastDeals, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/pastDeals')
        .send({ cabinClass: '' })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/pastDeals, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/pastDeals')
        .send({ cabinClass: 'Economy' })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // More Deals API //
  it('POST /api/moreDeals, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/moreDeals')
        .send({
          routeId: 3,
          offset: 0,
          limit: 5 })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/moreDeals, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/moreDeals')
        .send({
          routeId: '',
          offset: 0,
          limit: 5 })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/moreDeals, returns a valid deals data status 400', (done) => {
    chai.request(origin)
      .post('/api/moreDeals')
      .send({
        routeId: 3,
        offset: 0,
        limit: '' })
      .set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(400);
          done()
      });
  });
  it('POST /api/moreDeals, returns a valid Route id , limit , offset data status 400', (done) => {
    chai.request(origin)
      .post('/api/moreDeals')
      .send({
        routeId: '',
        offset: 0,
        limit: '' })
      .set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(400);
          done()
      });
  });
  it('POST /api/moreDeals, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/moreDeals')
        .send({
          routeId: 3,
          offset: 0,
          limit: 5 })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // filter Deal Detail API //
  it('POST /api/filterDealDetail, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/filterDealDetail')
        .send({
          routeId : 1,
          offset : 0,
          limit : 5,
          alliance : [],
          airlines : ["DL","AY","UA"],
          stops : [],
          months : [],
          sortByValue : "total_flight_time",
          sortByType : "DESC" })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/filterDealDetail, Route id , limit , offset is required data status 400', (done) => {
      chai.request(origin)
        .post('/api/filterDealDetail')
        .send({
          routeId : '',
          offset : 0,
          limit : 5,
          alliance : [],
          airlines : ["DL","AY","UA"],
          stops : [],
          months : [],
          sortByValue : "total_flight_time",
          sortByType : "DESC" })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/filterDealDetail, Route id , limit , offset is required data status 400', (done) => {
    chai.request(origin)
      .post('/api/filterDealDetail')
      .send({
        routeId : 1,
        offset : '',
        limit : '',
        alliance : [],
        airlines : ["DL","AY","UA"],
        stops : [],
        months : [],
        sortByValue : "total_flight_time",
        sortByType : "DESC" })
      .set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(400);
          done()
      });
});
  it('POST /api/filterDealDetail, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/filterDealDetail')
        .send({
          routeId : 1,
          offset : 0,
          limit : 5,
          alliance : [],
          airlines : ["DL","AY","UA"],
          stops : [],
          months : [],
          sortByValue : "total_flight_time",
          sortByType : "DESC" })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
  // Recently Booked Deals API //
  it('POST /api/recentlyBookedDeals, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/recentlyBookedDeals')
        .send({
          cabinClass : "Economy",
          maxDealCount :5 })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/recentlyBookedDeals, returns a valid deals data status 200', (done) => {
    chai.request(origin)
        .post('/api/recentlyBookedDeals')
        .send({
          cabinClass : "Economy",
          maxDealCount : '' })
        .set({ Authorization: token })
        .end((err, res) => {
          //console.log("signup",res)
            res.should.have.status(200);
            done()
        });
  });
  it('POST /api/recentlyBookedDeals, returns a valid deals data status 400', (done) => {
      chai.request(origin)
        .post('/api/recentlyBookedDeals')
        .send({
          cabinClass : "",
          maxDealCount :5 })
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(400);
            done()
        });
  });
  it('POST /api/recentlyBookedDeals, returns not authorized user status 403', (done) => {
      chai.request(origin)
        .post('/api/recentlyBookedDeals')
        .send({
          cabinClass : "Economy",
          maxDealCount :5 })
        //.set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(403);
            done()
          });
  });
});