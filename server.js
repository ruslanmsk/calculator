import http from 'http'
import fs from 'fs'
import path from 'path'

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let content = ''

    if (req.url === '/') {
        content = fs.readFileSync(path.join(path.dirname(''), 'public/index.html'))
    }

    if (req.url === '/main.js') {
        content = fs.readFileSync(path.join(path.dirname(''), 'public', req.url))
        res.setHeader('Content-type', 'text/javascript')
    }

    if (req.url === '/src/index.js') {
        content = fs.readFileSync(path.join(path.dirname(''), req.url))
        res.setHeader('Content-type', 'text/javascript')
    }

    if (req.url === '/style.css') {
        content = fs.readFileSync(path.join(path.dirname(''), 'public', req.url))
        res.setHeader('Content-type', 'text/css')
    }

    res.writeHead(200)
    res.end(content)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});