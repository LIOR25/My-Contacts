const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')


const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());


// const {Firestore} = require('@google-cloud/firestore');
// const firestore = new Firestore();

const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credenital: admin.credential.cert(serviceAccount)
});
const firestore = admin.firestore();


firestore.listCollections().then(collections => {
  for (let collection of collections) {
    console.log(`Found collection with id: ${collection.id}`);
  }
});



app.use('/' , router);
// app.get('/',(req,res) => res.send('hello'));

app.listen(4000, () => console.log('Express server runing on port 4000'));
