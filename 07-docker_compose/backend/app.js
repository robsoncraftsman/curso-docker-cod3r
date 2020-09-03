const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || '3000';

const { MongoClient } = require('mongodb');
let db = null;

function configureDatabase(callback) {
  MongoClient.connect('mongodb://db/mydb', (err, _db) => {
    if (err) return console.log(err);

    db = _db;
    callback();
  });
}

function configureExpress() {
  const server = express();

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  server.use(cors());

  server.get('/', (req, res) => {
    res.status(200).send('Backend conectado no mongo DB');
  });

  server.listen(port, () => {
    console.log(`Listening to requests on port:${port}`);
  });
}

configureDatabase(() => {
  configureExpress();
});
