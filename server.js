const proxy = require('http-proxy-middleware');
const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express().use(proxy({
        target: `http://${process.argv[2]}/`,
    }));

https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cer')
}, app).listen(3000, () => {
    console.log('starting https server at port 3000 and proxy to ' + process.argv[2]);
});
