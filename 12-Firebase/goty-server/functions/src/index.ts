import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const myApp = functions.https.onRequest((request, response) => {
    response.json({
        mensaje: "Hello from Firebase!!"
    });
});
