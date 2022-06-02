const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { notes } = require('./db/db.json');


app.get('/api/notes', (req, res) => {
    let results = notess;
    console.log(req.query)
    res.json(results);
});

app.listen(3001, () => {
    console.log(`API server now on port ${PORT}!`);
});