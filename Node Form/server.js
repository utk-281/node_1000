const http = require("http");
const fs = require("fs");
const { parse } = require("querystring"); // destructured parse() from querystring module

let server = http.createServer((req, res) => {
  //   console.log(req.url);

  if (req.method === "POST") {
    let FORM_ENCODED = "application/x-www-form-urlencoded"; // this tells content type i.e, contents are coming from html form
    // application/json, text/html ==> content type

    if (req.headers["content-type"] === FORM_ENCODED) {
      // checking if the request is coming from html form
      //! catching first event

      let body = "";
      req.on("data", (chunks) => {
        body += chunks.toString();
      });

      //! catching second event
      req.on("end", () => {
        let payload = parse(body); // parsing the body inside parse method
        console.log(payload);
        console.log(body);
        // console.log(payload.);
        let jsonPayload = JSON.stringify(payload);
        console.log(jsonPayload);
        res.end(jsonPayload); // before displaying result on UI convert the data into JSON.
      });
    } else {
      res.end(null); // if not end the req-res cycle
    }
  } else {
    //! === routing ===
    //! home page
    if (req.url === "/") {
      res.end("Home page");
    }
    //! about page
    else if (req.url === "/about") {
      res.end("about page");
    }
    //! form page
    else if (req.url === "/form") {
      fs.createReadStream("./index.html", "utf-8").pipe(res);
    }
    //! page not found
    else {
      res.end("page not found");
    }
  }
});

server.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running at port 9000");
});

// emit("hello") ==> event created
// emit is used to create a event

// to execute any event we use on("name", cb)
// on() is used to catch a event
