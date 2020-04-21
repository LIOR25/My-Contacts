

const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.getCollections = functions.https.onCall(async (data, context) => {

    const collections = await admin.firestore().listCollections();
    const collectionIds = collections.map(col => col.id);

    return { collections: collectionIds };

});