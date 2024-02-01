import http from 'node:http';
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Webpage</title>
</head>
<style>
*{
    font-family: 'Geist Mono';
}
</style>
<body>
    <h1>Welcome to my Web APP</h1>
</body>
</html>
        `);
    }else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`You searched for ${req.url}`);
    }
});
server.listen(9999, _ => console.log('server listening on port 9999'));