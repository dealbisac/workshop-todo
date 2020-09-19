import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD3hLEY5x4TYvIYgxRypkjBSRse4yR0MxY",
    authDomain: "workshop-todo-003.firebaseapp.com",
    databaseURL: "https://workshop-todo-003.firebaseio.com",
    projectId: "workshop-todo-003",
    storageBucket: "workshop-todo-003.appspot.com",
    messagingSenderId: "562082296916",
    appId: "1:562082296916:web:81386a12d62c0fd8c8a9c1",
    measurementId: "G-56KP64TX6N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;