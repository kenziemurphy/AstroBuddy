import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDrsBNpxqYs6o2g_0HVUBgiakGZyDDW7Ls",
    authDomain: "astrobuddy-59d2d.firebaseapp.com",
    databaseURL: "https://astrobuddy-59d2d.firebaseio.com",
    projectId: "astrobuddy-59d2d",
    storageBucket: "astrobuddy-59d2d.appspot.com",
    messagingSenderId: "699873558426"
};
let app = firebase.initializeApp(config);
export const db = app.database();