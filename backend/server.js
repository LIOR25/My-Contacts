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
//  console.log(serviceAccount)

admin.initializeApp({
    credenital: admin.credential.cert(serviceAccount),
    databaseURL: "https://my-contacts2.firebaseio.com"
});
// const firestore = admin.firestore();

const db = admin.firestore();
const contactsCollection = db.collection('contacts');


//this route serves all the users 
router.get("/contacts",(req, res ,next) =>{
    //get the collection in the database
    //I am storing them in an array
    let allUsers = [];
    //this is the get for the users in firestore
    contactsCollection.get()
    .then(snapshot => {
        //for each document return the data
        snapshot.forEach(doc => {
             allUsers.push({
                "docID" : doc.id,
                "userData": doc.data()
                });
        });
       //respond with the array created
       //as json
       res.json({
           "statusCode": "200",
           "statusReponse": "Ok",
           "message": "All users",
           "data" : allUsers
       })
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });

    
});


// firestore.listCollections().then(collections => {
//   for (let collection of collections) {
//     console.log(`Found collection with id: ${collection.id}`);
//   }
// });



app.use('/' , router);
// app.get('/',(req,res) => res.send('hello'));

app.listen(4000, () => console.log('Express server runing on port 4000'));
