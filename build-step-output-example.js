const BuiltTime = require('built-time.js');
export default function handler(request, response) {
  response.setHeader('content-type', 'text/plain');
  response.send(`
    This Serverless Function was built at ${new Date(BuiltTime)}.
    The current time is ${new Date()}
  `);
}