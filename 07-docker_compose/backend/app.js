const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

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
  const app = express();
  const port = process.env.PORT || '3000';

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());

  app.get('/', (req, res) => {
    res.status(200).send('Backend conectado no mongo DB');
  });

  const server = app.listen(port, () => {
    console.log(`Listening to requests on port:${port}`);
  });

  process.on('SIGTERM', () => {
    console.info('SIGTERM signal received...');
    if (!server) return;
    console.log('Closing express...');
    server.close(() => {
      console.log('Express closed');
      if (!db) return;
      console.log('Closing MongoDB...');
      db.close(() => {
        console.log('MongoDB closed');
        process.exit(0);
      });
    });
  });
}

configureDatabase(() => {
  configureExpress();
});
