const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/about', (req, res) => {
    const name = req.headers.name;
    if(name === 'admin'){
        res.status(200).send('Welcome Admin');
    } else {
        res.status(401).send('Unauthorized');
    }
});

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

module.exports = server;