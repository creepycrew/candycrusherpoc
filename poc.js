var http = require('http');    
var urls = ["http://www.haribo.com", "http://www.cadburys.com", "http://www.nestle.com"];
var responses = [];
var completed_requests = 0;

for (i in urls) {
    http.get(urls[i], function(res) {
        responses.push(res);
        completed_requests++;
        if (completed_requests == urls.length) {
            // All download done, process responses array
            console.log(responses);
        }
    });
}
