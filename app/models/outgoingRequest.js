var request = require('request');

var requestGoogle = function() {
	request('http://www.google.com', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body) // Show the HTML for the Google homepage.
  		}
	});
};

var requestWaterlooBBallSchedule = function() {
	request('https://nike.uwaterloo.ca/course/search.aspx?categoryId=9e279533-ef51-472d-80b2-ed859cbe1d04', function (error, response, body) {
  		if (!error && response.statusCode == 200) {
    		console.log(body) // Show the HTML for the Google homepage.
  		}
	});
}

module.exports = {'requestGoogle' : requestGoogle, 
				  'requestWaterlooBBallSchedule': requestWaterlooBBallSchedule
};