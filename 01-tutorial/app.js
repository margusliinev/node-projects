const http = require('http');

const { readFileSync } = require('fs');

const homePage = readFileSync('./index.html');
const homeStyles = readFileSync('./main.css');
const homeBackground = readFileSync('./images/background.jpg');
const homeCover = readFileSync('./images/cover.png');
const homeDevices = readFileSync('./images/devices.png');
const homeKids = readFileSync('./images/kids.png');
const homeLogo = readFileSync('./images/logo.png');
const homeMobile = readFileSync('./images/mobile.jpg');
const homeTV = readFileSync('./images/tv.png');
const homeVideoDevices = readFileSync('./videos/video-devices.m4v');
const homeVideoTV = readFileSync('./videos/video-tv.m4v');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write(homePage);
        res.end();
    } else if (url === '/main.css') {
        res.writeHead(200, { 'content-type': 'text/css' });
        res.write(homeStyles);
        res.end();
    } else if (url === '/images/background.jpg') {
        res.writeHead(200, { 'content-type': 'image/jpg' });
        res.write(homeBackground);
        res.end();
    } else if (url === '/images/cover.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(homeCover);
        res.end();
    } else if (url === '/images/devices.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(homeDevices);
        res.end();
    } else if (url === '/images/kids.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(homeKids);
        res.end();
    } else if (url === '/images/logo.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(homeLogo);
        res.end();
    } else if (url === '/images/mobile.jpg') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(homeMobile);
        res.end();
    } else if (url === '/images/tv.png') {
        res.writeHead(200, { 'content-type': 'image/png' });
        res.write(homeTV);
        res.end();
    } else if (url === '/videos/video-devices.m4v') {
        res.writeHead(200, { 'content-type': 'video/m4v' });
        res.write(homeVideoDevices);
        res.end();
    } else if (url === '/videos/video-tv.m4v') {
        res.writeHead(200, { 'content-type': 'video/m4v' });
        res.write(homeVideoTV);
        res.end();
    } else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.write('<h1>Page not found</h1>');
        res.end();
    }
});

server.listen(5555);
