//Require the module 
var uwaterlooApi = require('uwaterloo-api'); 
//Instantiate the client 
var uwclient = new uwaterlooApi({
  API_KEY : 'd0278e4ba495f8ffac50f902432c87fa'
});

//Use the API 
uwclient.get('feds/locations.json', function(err, res) {
  console.log(res); 
}); 

// uwclient.get('/events/holidays', function(err, res) {
//   console.log(res); 
// }); 

