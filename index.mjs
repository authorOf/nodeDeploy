import http from 'node:http';
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
        <h1 styles='font-family: verdana'>WELCOME TO MY WEB APP</h1>
        <p styles='font-family: verdana'>But it is under construction now. Sorry</p>
        `);
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`You searched for ${req.url}`);
    }
});
server.listen(9999, _ => console.log('server listening on port 9999'));