import * as firebase from "firebase";
import "firebase/firebase-firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBU6piNx8_K10itNo9ZDuPqeF39UvAgnEk",
    authDomain: "dairy-inv.firebaseapp.com",
    projectId: "dairy-inv",
    storageBucket: "dairy-inv.appspot.com",
    messagingSenderId: "124163735507",
    appId: "1:124163735507:web:f17f8d789291eebe74b926"
};

class Firebase {
    constructor(){
        firebase.initializeApp(firebaseConfig)
        console.log(firebase)
        this.auth = firebase.auth()
        this.database = firebase.firestore()
    }
    login = (email, pass) =>{
        return this.auth.signInWithEmailAndPassword(email, pass)
    }

    createUser = async (name, user, pass) =>{
        await this.auth.createUserWithEmailAndPassword(user, pass)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }
}

const firebaseService = new Firebase()
export default firebaseService


