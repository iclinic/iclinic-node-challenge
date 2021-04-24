const port = process.env.PORT || 5000;
const host = process.env.HOST || '0.0.0.0' 

const http = require('http');
const app = require('./app');
const server = http.createServer(app);

server.listen(port, host, () => {
    console.log(`listening on port ${port}...`);
});