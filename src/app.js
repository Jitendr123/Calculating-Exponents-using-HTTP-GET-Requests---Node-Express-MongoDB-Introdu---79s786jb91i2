const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const value1 = obj.num1;
      const value2 = obj.num2;

      // Write code here to calculate power of a number
      // "num1" must be a positive integer. If it is zero or negative, the API should return a 404 Not Found status code along with an error message: The operation cannot be performed
      // "num2" must be a non-negative integer.   
      // If the input is valid, the API should return a 200 OK status code along with the exponential result in the response body.  
      // If the input is invalid, the API should return a 400 Bad Request status code along with an error message.
      if(!value1 || !value2){
        res.writeHead(400,{"content-type":"text/html"});
        res.end('invalid response')
      }else if(num1<=0){
        res.writeHead(404,{"content-type":"text/html"});
        res.end('The operation cannot be performed')
      }else{
        res.writeHead(200,{"content-type":"text/html"});
        res.end("Here is the result",Math.pow(num1,num2));
      }
      
    });
    }
});

module.exports = server;
      