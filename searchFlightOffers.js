const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
let origin = 'https://alpha.app.oneairclub.com';
chai.use(chaiHttp);
//describe('Authentication Controller', () => {

let token ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImlhdCI6MTY0ODEyNjI3OSwiZXhwIjoxNjQ4MTU1MDc5fQ.Jxj0qjax6BTZ6EQ5HndRXjxD-X0N5dcC-38aOE838Cg'
describe('API Test Results', () => { 
// Search Flight Offers Get Traveller Information API //
it('GET /api/recentSearches, returns a valid flight offers data status 200', (done) => {
    chai.request(origin)
        .get('/api/recentSearches')
        .query()
        .set({ Authorization: token })
        .end((err, res) => {
            res.should.have.status(200);
            done()
        });
  });
  // // Search Flight Offers Search Flight Offers API //
  // it('POST /api/searchFlightOffers, returns a valid Flight Offers data status 200', (done) => {
  //   chai.request(origin)
  //       .post('/api/searchFlightOffers')
  //       .send( {
  //          segments : [
  //             {
  //                  fromCityCode : "SFO",
  //                  toCityCode : "LHR",
  //                  departingDate : "2022-02-15",
  //                  returnDate :"2022-02-25",
  //                  fromCityType : "CITY",
  //                  toCityType : "AIRPORT"
  //             }
           
               
  //         ],
  //          cabinClass : "Economy",
  //          passengers : [
  //             {
  //                  code : "ADT",
  //                  quantity : 1
  //             },
  //             {
  //               code :"CHD",
  //               quantity :1,
  //               age :2
  //           }
  //         ],
  //          alliance : "",
  //          airline : "",
  //          travelType : "RoundTrip",
  //          numberOfStops : "2+",
  //          departingFlexDates : "",
  //          returnFlexDates : ""
  //     })
  //       .set({ Authorization: token })
  //       .end((err, res) => {
  //         //console.log("sss",res)
  //           res.should.have.status(200);
  //           done()
  //       });
  // });
  // it('POST /api/searchFlightOffers, returns a valid frequent flyer id data status 400', (done) => {
  //   chai.request(origin)
  //     .post('/api/searchFlightOffers')
  //     .send( {
  //       segments : [
  //          {
  //               fromCityCode : "SFO",
  //               toCityCode : "LHR",
  //               departingDate : "2022-02-15",
  //               returnDate :"2022-02-25",
  //               fromCityType : "CITY",
  //               toCityType : "AIRPORT"
  //          }
        
            
  //      ],
  //       cabinClass : "Economy",
  //       passengers : [
  //          {
  //               code : "ADT",
  //               quantity : 1
  //          },
  //          {
  //            code :"CHD",
  //            quantity :1,
  //            age :2
  //        }
  //      ],
  //       alliance : "",
  //       airline : "",
  //       travelType : "RoundTrip",
  //       numberOfStops : "2+",
  //       departingFlexDates : "",
  //       returnFlexDates : ""
  //  })
  //     .set({ Authorization: token })
  //     .end((err, res) => {
  //         res.should.have.status(400);
  //         done()
  //     });
  // });
  // it('POST /api/searchFlightOffers, returns not authorized user status 403', (done) => {
  //     chai.request(origin)
  //       .post('/api/searchFlightOffers')
  //       .send({
  //         segments : [
  //            {
  //                 fromCityCode : "SFO",
  //                 toCityCode : "LHR",
  //                 departingDate : "2022-02-15",
  //                 returnDate :"2022-02-25",
  //                 fromCityType : "CITY",
  //                 toCityType : "AIRPORT"
  //            }
          
              
  //        ],
  //         cabinClass : "Economy",
  //         passengers : [
  //            {
  //                 code : "ADT",
  //                 quantity : 1
  //            },
  //            {
  //              code :"CHD",
  //              quantity :1,
  //              age :2
  //          }
  //        ],
  //         alliance : "",
  //         airline : "",
  //         travelType : "RoundTrip",
  //         numberOfStops : "2+",
  //         departingFlexDates : "",
  //         returnFlexDates : ""
  //    })
  //       //.set({ Authorization: token })
  //       .end((err, res) => {
  //           res.should.have.status(403);
  //           done()
  //         });
  // });
// Search Flight Offers More Flight Offers API //
// it('POST /api/moreFlightOffers, returns a valid segments , passengers and cabin class data status 200', (done) => {
//   chai.request(origin)
//       .post('/api/moreFlightOffers')
//       .send( {
//          searchId :15,
//          startDate :"2022-01-10",
//          endDate :"2022-01-22",
//          offset :0,
//          sortType :"Fastest",
//          numberOfStops :[],
//          airlines :[],
//          alliance :[],
//          totalRecords :20
//     })
//       .set({ Authorization: token })
//       .end((err, res) => {
//         //console.log("sss",res)
//           res.should.have.status(200);
//           done()
//       });
// });
it('POST /api/moreFlightOffers, returns a valid segments , passengers and cabin class data status 400', (done) => {
  chai.request(origin)
    .post('/api/moreFlightOffers')
    .send( {
      searchId :'',
      startDate :"2022-01-10",
      endDate :"2022-01-22",
      offset :0,
      sortType :"Fastest",
      numberOfStops :[],
      airlines :[],
      alliance :[],
      totalRecords :20
 })
    .set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(400);
        done()
    });
});
it('POST /api/moreFlightOffers, returns not authorized user status 403', (done) => {
    chai.request(origin)
      .post('/api/moreFlightOffers')
      .send({
        searchId :15,
        startDate :"2022-01-10",
        endDate :"2022-01-22",
        offset :0,
        sortType :"Fastest",
        numberOfStops :[],
        airlines :[],
        alliance :[],
        totalRecords :20
   })
      //.set({ Authorization: token })
      .end((err, res) => {
          res.should.have.status(403);
          done()
        });
});
// Search Flight Offers Itinerary Price API //
it('POST /api/itineraryPrice, returns a valid itinerary offer data status 200', (done) => {
chai.request(origin)
    .post('/api/itineraryPrice')
    .send( {
       dealId :1
  })
    .set({ Authorization: token })
    .end((err, res) => {
      //console.log("sss",res)
        res.should.have.status(200);
        done()
    });
});
it('POST /api/itineraryPrice, returns a valid itinerary offer data status 200', (done) => {
chai.request(origin)
  .post('/api/itineraryPrice')
  .send({
    dealId :''
})
  .set({ Authorization: token })
  .end((err, res) => {
      res.should.have.status(200);
      done()
  });
});
it('POST /api/itineraryPrice, returns not authorized user status 403', (done) => {
  chai.request(origin)
    .post('/api/itineraryPrice')
    .send( {
      dealId :1
 })
    //.set({ Authorization: token })
    .end((err, res) => {
        res.should.have.status(403);
        done()
      });
});
});