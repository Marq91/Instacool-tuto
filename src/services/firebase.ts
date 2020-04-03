import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBxJ30NtCQTwv58nNlsA21xqJNr8Sscjm0",
    appId: "1:408981246765:web:6ba6cc18228d78cfbb39a4",
    authDomain: "instacool-53e58.firebaseapp.com",
    databaseURL: "https://instacool-53e58.firebaseio.com",
    messagingSenderId: "408981246765",
    projectId: "instacool-53e58",
    storageBucket: "instacool-53e58.appspot.com",
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const firestore = firebase.firestore()
// const settings = { timestampsInSnapshots: true }
// firestore.settings(settings)

export const auth = firebase.auth()
// export const db = firestore
export const db = firebase.firestore()
export const storage = firebase.storage()