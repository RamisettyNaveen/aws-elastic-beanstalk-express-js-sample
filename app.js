const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('we have added a review stage with manual approval to our cont'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
