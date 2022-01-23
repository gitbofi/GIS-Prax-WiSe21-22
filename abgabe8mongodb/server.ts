const fs: any = require("fs");
const http: any = require("http");
const _: any = require("lodash");

const server: any = http.createServer((req: any, res: any) => {

  // set header content type
  res.setHeader("Content-Type", "text/html");

  let path: String = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-hi":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send html file
  fs.readFile(path, (err: any, data: any) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
