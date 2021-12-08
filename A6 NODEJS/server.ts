const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);

  // set header content type
  res.setHeader('Content-Type', 'text/plain');

  // routing
  let path = './views/';
  switch(req.url) {
    case '/':
      path += console.log("Server erreichbar");
      res.statusCode = 200;
      break;
    case '/convertDate':
      path += convertDate();
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

  // send html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


});

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});

function convertDate() {
  const d = new Date('2010-08-05');
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

  console.log(`${da}-${mo}-${ye}`);
}