import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
class Firebase {
    app = null;
    auth = null;
    firestore = null;

    constructor() {
        this.app = initializeApp({
            apiKey: "AIzaSyDG3ePmuDRQpog5cSpGKKyRlnX4lj_uOSY",
            authDomain: "movie-app-cf3e5.firebaseapp.com",
            projectId: "movie-app-cf3e5",
            storageBucket: "movie-app-cf3e5.appspot.com",
            messagingSenderId: "563152640934",
            appId: "1:563152640934:web:fe8c7575c28aade86f4d67"
        });
        this.auth = getAuth(this.app);
        this.firestore = getFirestore(this.app);
    }
}

export default new Firebase();