// import the required modules
const http = require("http");
const fs = require("fs");

// create an HTTP server
const server = http.createServer((request, response) => {
  // check if the request method is POST
  if (request.method === "POST") {
    // create a buffer to hold the incoming data
    let body = "";

    // listen for data events on the request stream
    request.on("data", data => {
      // append the incoming data to the body
      body += data;
    });

    // listen for the end event on the request stream
    request.on("end", () => {
      // write the body to the file
      fs.writeFile("../contactResponses.txt", body, error => {
        if (error) {
          console.error(error);
        } else {
          console.log("Body written to file.");
        }
      });
    });
  }

  // send a response to the client
  response.end();
});

// start the server on port 3000
server.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
