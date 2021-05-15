const http = require('http');

const server = http.createServer((req, res) => {
   if(req.url === '/'){
      res.end(`
      <h1>Welcome on server</h1>
      <a href="/about">About</a>
      `);
   }
   else if(req.url === '/about') {
      res.end(`
      <h1>Server description</h1>
      <a href="/">Back Home</a>
      `);
   } else {
      res.end(`
      <h1>Oops !</h1>
      <p>Page doesn't exist</p>
      <a href="/">Back Home</a>
      `);
   }
   
})

server.listen(5000);